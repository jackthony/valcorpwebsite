import { NgStyle } from '@angular/common';
import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-ubicacion',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './ubicacion.component.html',
  styleUrl: './ubicacion.component.css'
})
export class UbicacionComponent {

     imagen = input<string>();
     color = input<string>();
     ubiMaps = input<string>();
     proyectoMap = input<string>();

}
