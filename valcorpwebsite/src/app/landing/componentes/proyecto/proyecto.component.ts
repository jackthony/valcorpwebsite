import { CommonModule, NgStyle } from '@angular/common';
import { AfterViewInit, Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-proyecto',
  standalone: true,
  imports: [FontAwesomeModule, NgStyle, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.scss'],  // Cambié a 'styleUrls'

})
export class ProyectoComponent  {


  // Inputs
  @Input() colorPrecio?: string;
  @Input() colorIcono?: string;
  @Input() urlImg?: string;
  @Input() titulo?: string;
  @Input() marcaAguaLogoProyecto?: string;
  @Input() precioDesde?: string;
  @Input() cuotasDesde?: string;
  @Input() lotesDesde?: string;
  @Input() routerLink?: string;

  casa = faHouseChimney;
}
