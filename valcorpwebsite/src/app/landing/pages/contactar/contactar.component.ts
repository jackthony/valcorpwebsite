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
  color = input<string>();
  formContact!: FormGroup;
 
   
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formContact = this.fb.group({
      nombreCompleto: ['', Validators.required],
      numero: [, Validators.required],
      correo: ['', Validators.required],
      proyecto: ['', Validators.required]
    });
  }

  enviar(): void {
    if (this.formContact.valid) {
      // Lógica para enviar el formulario
      console.log(this.formContact.value);
    } else {
      this.formContact.markAllAsTouched();
    }
  }

  hasError(controlName: string, errorName: string){
  return this.formContact.get(controlName)?.hasError(errorName)  &&  this.formContact.get(controlName)?.touched
  }
}
