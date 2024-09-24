import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { ProyectoComponent } from '../componentes/proyecto/proyecto.component';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { SwiperContainer, register } from 'swiper/element/bundle';
@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [ProyectoComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.scss'
})
export class ProyectosComponent {
 
  
  ProyectosImg = [
    { urlImg: '../../../../public/assets/image.webp' , 
      alt:'Proyecto Huerto', 
      colorPrecio:'#245CB5' , 
      colorIcono:'#91BF24', 
      titulo:'Urb. Villa Los Robles', 
      marcaAguaLogoProyecto:'../../../../public/assets/ROBLES-SIN-FONDO.png', 
      precioDesde:'51,899',
      lotesDesde:'75m',
      cuotasDesde:'s/845',
      ruta:'/proyectos/Robles',
    },
    { urlImg: '../../../../public/assets/imagen-robles.webp' , 
      alt:'Proyecto Prados Nuevo',
      colorPrecio:'#EF8619' , 
      colorIcono:'#EF8619',
      titulo:'Urb. Los Huertos de San Jose' , 
      marcaAguaLogoProyecto:'../../../../public/assets/HUERTOS-SIN-FONDO.png',
      precioDesde:'s/ 51,322',
      cuotasDesde:'s/811',
      lotesDesde:'90m',
      ruta:'/proyectos/Huertos',
    },
    { urlImg: '../../../../public/assets/imagen-prados.webp' , 
      alt:'Proyecto Robles',
      colorPrecio:'#473374' , 
      colorIcono:'#473374',
      titulo:'Urb. Los Prados',
      marcaAguaLogoProyecto:'../../../../public/assets/PRADOS-NUEVO.png',
      precioDesde:'Proximamente',
      cuotasDesde:'s/795',
      lotesDesde:'60m',
      ruta:'/proyectos/Prados',
    },

  ]


}
