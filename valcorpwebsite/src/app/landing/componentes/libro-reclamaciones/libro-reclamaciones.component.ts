import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { filter } from 'rxjs/operators';  // Necesitamos 'filter' para evitar entradas repetitivas

@Component({
  selector: 'app-libro-reclamaciones',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatInputModule, MatSelectModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './libro-reclamaciones.component.html',
  styleUrls: ['./libro-reclamaciones.component.css']
})
export default class LibroReclamacionesComponent {
  reclamoForm: FormGroup;
  departamentos = ['Amazonas', 'Ancash', 'Apurimac', 'Arequipa'];
  provincias = ['Provincia 1', 'Provincia 2', 'Provincia 3'];
  distritos = ['Distrito 1', 'Distrito 2', 'Distrito 3'];
  proyectos = ['Proyecto1', 'Proyecto2'];

  constructor(private fb: FormBuilder) {
    this.reclamoForm = this.fb.group({
      nombreCompleto: ['', Validators.required],
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],  // Solo números
      correo: ['', [Validators.required, Validators.email]],
      documento: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],  // Solo números
      direccion: ['', Validators.required],
      departamento: ['', Validators.required],
      provincia: ['', Validators.required],
      distrito: ['', Validators.required],
      proyectoList: ['', Validators.required],
      montoReclamado: ['', [Validators.required, Validators.pattern('^(S/\\s?)?\\d+(\\.\\d{1,2})?$')]],  // Solo números y decimales
      detalleReclamo: ['', Validators.required],
    });

    // Escuchar cambios en el campo "Monto Reclamado"
    this.reclamoForm.get('montoReclamado')?.valueChanges
      .pipe(filter(value => value && !value.startsWith('S/')))  // Evita prefijo duplicado
      .subscribe(value => {
        this.reclamoForm.patchValue({
          montoReclamado: `S/ ${value}`
        }, { emitEvent: false });  // Evitar emitir evento para no causar bucles infinitos
      });
  }

  onSubmit() {
    if (this.reclamoForm.valid) {
      // Enviar el correo usando EmailJS
      emailjs.send(
        'service_0jss4tb',  // Tu Service ID
        'template_29ybmsm', // Tu Template ID
        this.reclamoForm.value,  // Los valores del formulario
        'U8AJSYKAdhYUS25Qs'      // Tu User ID
      ).then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        alert('Correo enviado exitosamente');
      }, (error) => {
        console.error(error.text);
        alert('Error al enviar el correo');
      });
    } else {
      // Si el formulario no es válido, marcar todos los campos como "tocados"
      this.reclamoForm.markAllAsTouched();
    }
  }
}
