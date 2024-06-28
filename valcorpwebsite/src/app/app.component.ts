import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './landing/componentes/header/header.component';
import { HomeComponent } from './landing/pages/home/home.component';
import { ProyectosComponent } from "./landing/proyectos/proyectos.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, HeaderComponent, HomeComponent, ProyectosComponent]
})
export class AppComponent {
  title = 'valcorpwebsite';
}
