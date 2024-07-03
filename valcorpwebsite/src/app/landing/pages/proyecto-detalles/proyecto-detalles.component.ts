import { Component, Input } from '@angular/core';
import { BannerComponent } from '../../componentes/banner/banner.component';
import { FacilidadesPagoComponent } from '../../componentes/facilidades-pago/facilidades-pago.component';
import { InfoProyectoComponent } from '../../componentes/info-proyecto/info-proyecto.component';
import { UbicacionComponent } from '../../componentes/ubicacion/ubicacion.component';
import { ContactoComponent } from '../../componentes/contacto/contacto.component';
import { proyectoList } from '../../../mock/proyectos.mock';

@Component({
  selector: 'app-proyecto-detalles',
  standalone: true,
  imports: [BannerComponent,FacilidadesPagoComponent,InfoProyectoComponent,UbicacionComponent,ContactoComponent],
  templateUrl: './proyecto-detalles.component.html',
  styleUrl: './proyecto-detalles.component.css'
})
export default class ProyectoDetallesComponent {
@Input('id') proyectoId!: string;
proyectoList = proyectoList;
}
