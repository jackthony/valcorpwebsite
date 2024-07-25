import { Component } from '@angular/core';
import { MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-open-dialog',
  standalone: true,
  imports: [MatDialogContent,MatDialogActions],
  templateUrl: './open-dialog.component.html',
  styleUrl: './open-dialog.component.css'
})
export class OpenDialogComponent {
  constructor(public dialogRef: MatDialogRef<OpenDialogComponent>) {}

  close(): void {
    this.dialogRef.close();
  }
}
