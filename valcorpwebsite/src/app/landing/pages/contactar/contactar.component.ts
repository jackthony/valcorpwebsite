import { NgStyle, NgIf } from '@angular/common'; // Importa NgIf
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactar',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, NgStyle, NgIf, ReactiveFormsModule], // Añade NgIf a los imports
  templateUrl: './contactar.component.html',
  styleUrls: ['./contactar.component.css'],
})
export default class ContactarComponent implements OnInit {
  @Input() color: string | undefined; // Definición correcta de @Input()
  @Input() imgModelo: string | undefined; // Añadimos imgModelo como @Input
  @Input() tipo_grafia: string | undefined; // Añadimos imgModelo como @Input

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
      // Extraemos los valores del formulario
      const nombreCompleto = this.formContact.value.nombreCompleto;
      const numero = this.formContact.value.numero;
      const correo = this.formContact.value.correo;
      const proyecto = this.formContact.value.proyecto;
      const mensaje = this.formContact.value.mensaje;

      // Número de WhatsApp al que se enviará el mensaje
      const telefonoWhatsApp = '+51970492990'; // Reemplaza con tu número de WhatsApp

      // Crear el mensaje para WhatsApp
      const texto = `Hola, mi nombre es ${nombreCompleto}. Mi número es ${numero}, mi correo es ${correo}, y estoy interesado en el proyecto ${proyecto}. ${mensaje ? 'Mensaje adicional: ' + mensaje : ''}`;

      // Crear la URL para WhatsApp
      const whatsappUrl = `https://wa.me/${telefonoWhatsApp}?text=${encodeURIComponent(texto)}`;

      // Abre WhatsApp en una nueva pestaña
      window.open(whatsappUrl, '_blank');
      this.formContact.reset();
    } else {
      // Si el formulario es inválido, marcamos todos los campos como tocados para mostrar errores
      this.formContact.markAllAsTouched();
    }
  }

  // Verifica si el campo tiene un error específico
  hasError(controlName: string, errorName: string) {
    const control = this.formContact.get(controlName);
    return control?.hasError(errorName) && control.touched;
  }
}
