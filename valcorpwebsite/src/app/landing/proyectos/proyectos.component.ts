import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { ProyectoComponent } from '../componentes/proyecto/proyecto.component';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { SwiperContainer, register } from 'swiper/element/bundle';
import { MatSpinner } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [ProyectoComponent,MatSpinner],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.scss'
})
export class ProyectosComponent {
 
  
  ProyectosImg = [
    { urlImg: '../../../../public/assets/image.webp' , 
      alt:'Proyecto Robles', 
      colorPrecio:'#245CB5' , 
      colorIcono:'#91BF24', 
      titulo:'Urb. Villa Los Robles', 
      marcaAguaLogoProyecto:'../../../../public/assets/ROBLES-SIN-FONDO.png', 
      precioDesde:'51,070',
      lotesDesde:'75m',
      cuotasDesde:'s/779',
      ruta:'/proyectos/Robles',
    },
    { urlImg: '../../../../public/assets/imagen-robles.webp' , 
      alt:'Proyecto Huerto San Jose',
      colorPrecio:'#EF8619' , 
      colorIcono:'#EF8619',
      titulo:'Urb. Los Huertos de San Jose' , 
      marcaAguaLogoProyecto:'../../../../public/assets/HUERTOS-SIN-FONDO.png',
      precioDesde:'s/ 58,905',
      cuotasDesde:'s/1040',
      lotesDesde:'90m',
      ruta:'/proyectos/Huertos',
    },
    { urlImg: '../../../../public/assets/imagen-prados.webp' , 
      alt:'Proyecto Los Prados',
      colorPrecio:'#473374' , 
      colorIcono:'#473374',
      titulo:'Urb. Los Prados',
      marcaAguaLogoProyecto:'../../../../public/assets/PRADOS-NUEVO.png',
      precioDesde:undefined,
      cuotasDesde:undefined,
      lotesDesde:undefined,
      ruta:'/proyectos/Prados',
    },

  ]


}
