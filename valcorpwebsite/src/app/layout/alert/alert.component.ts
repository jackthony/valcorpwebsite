import { CommonModule } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  modalVisible = true;

   constructor(private dialogRef:MatDialogRef<AlertComponent>){

   }
   enviarReclamo(valor:boolean){
    this.dialogRef.close(valor);
   }

  closeModal(valor:boolean) {
   this.dialogRef.close(valor);
  }
}
