import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-proyecto',
  standalone: true,
  imports: [FontAwesomeModule, NgStyle],
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.scss']
})
export class ProyectoComponent {
  @Input() colorPrecio?: string;
  @Input() colorIcono?: string;
  @Input() urlImg?: string;
  @Input() titulo?: string;
  @Input() marcaAguaLogoProyecto?: string;
  @Input() precioCouta?: string;
  @Input() precioInicial?: string;  // Nuevo input para el precio inicial
  @Input() tamanioLote?: string;  // Nuevo input para el tamaño del lote
  @Input() plazo?: string;  // Nuevo input para el plazo

  casa = faHouseChimney;
}
