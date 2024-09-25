import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  template: `
    <div *ngIf="control && control.invalid && (control.dirty || control.touched)">
      <small *ngIf="control.errors?.['required']" class="error">Este campo es requerido</small>
      <small *ngIf="control.errors?.['email']" class="error">Debe ser un correo electrónico válido</small>
      <small *ngIf="control.errors?.['minlength']">Mínimo {{ control.errors?.['minlength']?.requiredLength ?? 0 }} caracteres</small>
      <small *ngIf="control.errors?.['maxlength']">Máximo {{ control.errors?.['maxlength']?.requiredLength ?? 0 }} caracteres</small>
    </div>
  `,
  styles: [`
    .error {
      color: red;
      font-size: 12px;
    }
  `]
})
export class ErrorMessageComponent {
  @Input() control!: AbstractControl | null; // Recibe el control de formulario para mostrar los errores
}
