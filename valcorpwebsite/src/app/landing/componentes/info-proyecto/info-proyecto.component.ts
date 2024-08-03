import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { OpenDialogComponent } from '../../modal/open-dialog/open-dialog.component';

@Component({
  selector: 'app-info-proyecto',
  standalone: true,
  imports: [NgStyle, MatDialogModule],
  templateUrl: './info-proyecto.component.html',
  styleUrl: './info-proyecto.component.css'
})
export class InfoProyectoComponent {
  @Input() imgModelo?: string;
  @Input() color?: string;
  openModalXD = false;
  constructor(public dialog: MatDialog) {}
 
  openModalDetalles($event: Event){
    this.openModalXD = true;
    console.log($event)
  }
  outModal(){
    
    this.openModalXD = false;

  }
}
