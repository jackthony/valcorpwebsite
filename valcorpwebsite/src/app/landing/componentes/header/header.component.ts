import { Component, HostListener, signal, Signal } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { proyectoList } from '../../../mock/proyectos.mock';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule,RouterLink,MatMenuModule,MatButtonModule,NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  
  scrollY:boolean = false;

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
      titulo: 'Urb. Villa Los Robles',
      alt: 'Robles'
     },
     {
      id:2,
      titulo: 'Urb. Los Huertos de San Jose',
      alt: 'Huertos'
     },
     {
      id:3,
      titulo:'Urb. Los Prados',
      alt: 'Prados'
     },

  ]
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log(`Desplazamiento: ${scrollOffset}`);
    this.scrollY = 0 < scrollOffset;
  }

}
   