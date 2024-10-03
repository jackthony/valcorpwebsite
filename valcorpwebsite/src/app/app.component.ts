import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterOutlet } from '@angular/router';
import { HeaderComponent } from './landing/componentes/header/header.component';
import { ProyectosComponent } from './landing/proyectos/proyectos.component';
import { FamiliaComponent } from './landing/familia/familia.component';
import HomeComponent from './landing/pages/home/home.component';
import { signal, effect } from '@angular/core';
import { PieDePaginaComponent } from './landing/componentes/pie-de-pagina/pie-de-pagina.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { WhatsappButtonComponent } from './landing/componentes/whatsapp-button/whatsapp-button.component';
import { RouterModule } from './app.routes'; // RouterModule for routing

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Corrección de styleUrls
  imports: [
    CommonModule,
    MatProgressSpinnerModule, // Importa el módulo, no el componente
    RouterOutlet, 
    HeaderComponent, 
    ProyectosComponent, 
    FamiliaComponent, 
    HomeComponent, 
    PieDePaginaComponent, 
    WhatsappButtonComponent, 
    RouterModule // Para que las rutas funcionen correctamente
  ]
})
export class AppComponent {
  title = 'valcorpwebsite';
}
