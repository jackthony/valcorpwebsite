import { Component } from '@angular/core';
import { ProyectoComponent } from '../componentes/proyecto/proyecto.component';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [ProyectoComponent],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.scss'
})
export class ProyectosComponent {
 
  
  ProyectosImg = [
    { urlImg: '../../../../public/assets/image.webp' , alt:'Proyecto Huerto', colorPrecio:'#245CB5' , colorIcono:'#91BF24', titulo:'Urb. Villa Los Robles', marcaAguaLogoProyecto:'../../../../public/assets/ROBLES-SIN-FONDO.png'},
    { urlImg: '../../../../public/assets/imagen-robles.webp' , alt:'Proyecto Prados Nuevo',colorPrecio:'#EF8619' , colorIcono:'#EF8619',titulo:'Urb. Los Huertos de San Jose' , marcaAguaLogoProyecto:'../../../../public/assets/HUERTOS-SIN-FONDO.png'},
    { urlImg: '../../../../public/assets/imagen-prados.webp' , alt:'Proyecto Robles',colorPrecio:'#473374' , colorIcono:'#473374',titulo:'Urb. Los Prados',marcaAguaLogoProyecto:'../../../../public/assets/PRADOS-NUEVO.png' },

  ]


}
