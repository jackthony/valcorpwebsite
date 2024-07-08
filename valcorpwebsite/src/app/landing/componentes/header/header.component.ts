import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { proyectoList } from '../../../mock/proyectos.mock';

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
    { url: '/nuestro-proposito', title: 'Nuestro Propósito' },
    { url: '/contacto', title: 'Escribenos' },
  ];

  proyectos =[
     
     {
      id:1,
      titulo: 'Los Huertos de San Jose',
      alt: 'Huertos'
     },
     {
      id:2,
      titulo: 'Los Prados',
      alt: 'Prados'
     },
     {
      id:3,
      titulo:'Urb. Villa Los Robles',
      alt: 'Robles'
     },

  ]

}
   