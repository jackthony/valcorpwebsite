import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-contactar',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './contactar.component.html',
  styleUrl: './contactar.component.css'
})
export default class ContactarComponent {

  formContact!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Inicializamos el formulario con validaciones, incluyendo los permisos
    this.formContact = this.fb.group({
      nombreCompleto: ['', [Validators.required, Validators.minLength(3)]],
      numero: ['', [Validators.required, Validators.pattern('^[0-9]+$')]], // Solo números
      correo: ['', [Validators.required, Validators.email]], // Email válido
      proyecto: ['', Validators.required],
      mensaje: [''],
      aceptarTerminos: [false, Validators.requiredTrue],  // Validamos que el usuario acepte los términos
      aceptarComunicaciones: [false, Validators.requiredTrue]  // Validamos que acepte las comunicaciones comerciales
    });
  }

  enviar(): void {
    if (this.formContact.valid) {

      const nombreCompleto = this.formContact.value.nombreCompleto;
      const numero = this.formContact.value.numero;
      const correo = this.formContact.value.correo;
      const proyecto = this.formContact.value.proyecto;
      const mensaje = this.formContact.value.mensaje;

      const telefonoWhatsApp = '+51970492990'; 

      // Crear el mensaje para WhatsApp
      const texto = `Hola, mi nombre es ${nombreCompleto}. Mi número es ${numero}, mi correo es ${correo}, y estoy interesado en el proyecto ${proyecto}. ${mensaje ? 'Mensaje adicional: ' + mensaje : ''}`;

      // Crear la URL para WhatsApp
      const whatsappUrl = `https://wa.me/${telefonoWhatsApp}?text=${encodeURIComponent(texto)}`;

      // Abre WhatsApp en una nueva pestaña
      window.open(whatsappUrl, '_blank');
    } else {

      this.formContact.markAllAsTouched();
    }
  }
  hasError(controlName: string, errorName: string) {
    const control = this.formContact.get(controlName);
    return control?.hasError(errorName) && control.touched;
  }
}
