import { Component, Input } from '@angular/core';
import { BannerComponent } from '../../componentes/banner/banner.component';
import { FacilidadesPagoComponent } from '../../componentes/facilidades-pago/facilidades-pago.component';
import { InfoProyectoComponent } from '../../componentes/info-proyecto/info-proyecto.component';
import { UbicacionComponent } from '../../componentes/ubicacion/ubicacion.component';
import { ContactoComponent } from '../../componentes/contacto/contacto.component';
import { proyectoList } from '../../../mock/proyectos.mock';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NgIf } from '@angular/common';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-proyecto-detalles',
  standalone: true,
  imports: [BannerComponent,FacilidadesPagoComponent,NgIf,InfoProyectoComponent,UbicacionComponent,ContactoComponent,MatProgressSpinner],
  templateUrl: './proyecto-detalles.component.html',
  styleUrl: './proyecto-detalles.component.css'
})
export default class ProyectoDetallesComponent implements OnInit{

  ngOnInit(): void {
    this.scrollToTop()
  }
@Input('id') proyectoId!: string;
proyectoList = proyectoList;
spinner :boolean = false;
 recibir(bool:boolean){
     this.spinner = bool;
     console.log(this.spinner)
 }

 scrollToTop() {
  window.scrollTo({
    top: 0,     // Posición deseada (0px en este caso)
    behavior: 'smooth'  // Opcional: animación suave
  });
}
}
