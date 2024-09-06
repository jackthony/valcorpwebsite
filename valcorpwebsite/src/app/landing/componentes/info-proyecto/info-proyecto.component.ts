import { NgStyle, CommonModule } from '@angular/common'; // Importa CommonModule
import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { OpenDialogComponent } from '../../modal/open-dialog/open-dialog.component';

@Component({
  selector: 'app-info-proyecto',
  standalone: true,
  imports: [NgStyle, CommonModule, MatDialogModule], // Asegúrate de incluir CommonModule aquí
  templateUrl: './info-proyecto.component.html',
  styleUrls: ['./info-proyecto.component.css']
})
export class InfoProyectoComponent {
  @Input() imgModelo?: string;
  @Input() color?: string;
  hoveredIcon: string | null = null; // Variable para manejar el ícono actualmente en hover

  constructor(public dialog: MatDialog) {}

  openModalDetalles(iconName: string): void {
    this.hoveredIcon = iconName; // Establece el nombre del ícono actualmente en hover
  }

  outModal(): void {
    this.hoveredIcon = null; // Limpia la variable cuando el mouse sale
  }
}
