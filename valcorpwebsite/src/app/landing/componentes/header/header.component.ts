import { Component, HostListener, Input, signal, Signal } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { proyectoList } from '../../../mock/proyectos.mock';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { faChevronDown,faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


interface subUrl {
  linlUrl:string,
  titulo:string,
  open:boolean
}


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule,RouterLink,MatMenuModule,MatButtonModule,NgClass,FontAwesomeModule,NgFor,NgIf,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  
  scrollY:boolean = false;
  isActive = signal(false);
  @Input() isActiveArrow :boolean = false;
  down = faChevronDown;
  up = faChevronUp;


  links = [
    { url: '/home', title: 'Inicio' },
    { url: '/nosotros', title: 'Nosotros' },
    { title: 'Proyectos', subUrl:[{linkUrl:'robles',titulo:'Robles' ,open:true}, {linkUrl:'huertos',titulo:'Huertos', open:true},{linkUrl:'prados',titulo:'Prados', open:true}] },
    { url: '/nuestro-proposito', title: 'Nuestro Propósito' },
    { url: '/contacto', title: 'Escribenos' },
  ];

  proyectos =[
    {
      id:3,
      titulo:'Urb. Villa Los Robles',
      alt: 'Robles'
     },
     {
      id:1,
      titulo: 'Urb. Los Huertos de San Jose',
      alt: 'Huertos'
     },
     {
      id:2,
      titulo: 'Urb. Los Prados',
      alt: 'Prados'
     },
 

  ]
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log(`Desplazamiento: ${scrollOffset}`);
    this.scrollY = 0 < scrollOffset;
  }


  toggleMenu(){
    this.isActive.update(value => !value);
  }
  toggleFAQ() {
    this.isActiveArrow = !this.isActiveArrow;
  }
  toggle(){
    this.toggleMenu();
    this.toggleFAQ()
  }

  navLinkActive(event:Event,item:any){
    this.isActive.set(!this.isActive)
  }
}
   