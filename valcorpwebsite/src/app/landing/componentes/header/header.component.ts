import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  links = [
    { url: '/', title: 'Inicio' },
    { url: '/nosotros', title: 'Nosotros' },
    { url: '/Proyectos', title: 'Proyectos' },
    { url: '/Promociones', title: 'Nuestro Propósito' },
    { url: '/Escribenos', title: 'Escribenos' },
  ];
}
   