import { CommonModule, NgStyle } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-ubicacion',
  standalone: true,
  imports: [NgStyle,MatProgressSpinner,CommonModule],
  templateUrl: './ubicacion.component.html',
  styleUrl: './ubicacion.component.css'
})
export class UbicacionComponent {

     imagen = input<string>();
     color = input<string>();
     ubiMaps = input<string>();
     proyectoMap = input<string>();
     imgModelo = input<string>();

}
