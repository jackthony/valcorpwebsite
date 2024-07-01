import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule,RouterLink,MatMenuModule,MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  links = [
    { url: '/', title: 'Inicio' },
    { url: '/nosotros', title: 'Nosotros' },
    { title: 'Proyectos', subUrl:[{linkUrl:'robles',titulo:'Robles'}, {linkUrl:'huertos',titulo:'Huertos'},{linkUrl:'prados',titulo:'Prados'}] },
    { url: '/proposito', title: 'Nuestro Propósito' },
    { url: '/contacto', title: 'Escribenos' },
  ];
}
   