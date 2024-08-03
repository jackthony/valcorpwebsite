import { NgStyle } from '@angular/common';
import {Component, Input, input} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule,MatButtonModule,NgStyle,ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
})
export class ContactoComponent {
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
