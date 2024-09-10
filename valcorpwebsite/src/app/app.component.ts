import { Component, inject, Injector, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './landing/componentes/header/header.component';
import { ProyectosComponent } from "./landing/proyectos/proyectos.component";
import { FamiliaComponent } from './landing/familia/familia.component';
import HomeComponent from './landing/pages/home/home.component';
import { effect, signal } from '@angular/core';
import { PieDePaginaComponent } from './landing/componentes/pie-de-pagina/pie-de-pagina.component';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule,MatProgressSpinner, RouterOutlet, HeaderComponent, ProyectosComponent, FamiliaComponent,HomeComponent,PieDePaginaComponent]
})
export class AppComponent {

  title = 'valcorpwebsite';


}
