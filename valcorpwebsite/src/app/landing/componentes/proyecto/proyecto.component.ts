import { NgStyle } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';


// Instalar los módulos de Swiper
@Component({
  selector: 'app-proyecto',
  standalone: true,
  imports: [FontAwesomeModule,NgStyle],
  templateUrl: './proyecto.component.html',
  styleUrl: './proyecto.component.scss'
})
export class ProyectoComponent {
  
  @Input() colorPrecio?: string ;
  @Input() colorIcono?: string ;
  @Input() urlImg?: string ;
  @Input() titulo?: string ;
  @Input() marcaAguaLogoProyecto?: string ;
  @Input() precioDesde?:string;

  




  casa = faHouseChimney;
}
