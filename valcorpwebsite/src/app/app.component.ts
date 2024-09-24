import { Component, inject, Injector, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './landing/componentes/header/header.component';
import { ProyectosComponent } from "./landing/proyectos/proyectos.component";
import { FamiliaComponent } from './landing/familia/familia.component';
import HomeComponent from './landing/pages/home/home.component';
import { effect, signal } from '@angular/core';
import { PieDePaginaComponent } from './landing/componentes/pie-de-pagina/pie-de-pagina.component';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { WhatsappButtonComponent } from './landing/componentes/whatsapp-button/whatsapp-button.component';
import { LegalesComercialesComponent } from './landing/componentes/legales-comerciales/legales-comerciales.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule,MatProgressSpinner, RouterOutlet, HeaderComponent, ProyectosComponent, FamiliaComponent,HomeComponent,PieDePaginaComponent,WhatsappButtonComponent,RouterModule,LegalesComercialesComponent]
})
export class AppComponent {

  title = 'valcorpwebsite';


}
