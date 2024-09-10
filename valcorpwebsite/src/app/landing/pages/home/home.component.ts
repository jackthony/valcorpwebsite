import { Component } from '@angular/core';
import { HeaderComponent } from "../../componentes/header/header.component";
import { ProyectoComponent } from '../../componentes/proyecto/proyecto.component';
import { ProyectosComponent } from "../../proyectos/proyectos.component";
import { FamiliaComponent } from "../../familia/familia.component";
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NgIf } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeaderComponent, ProyectosComponent, FamiliaComponent,MatProgressSpinner,NgIf,NgxSkeletonLoaderModule]
})
export default class HomeComponent {
    loading: boolean = true; // Controla la visibilidad del spinner

    onVideoLoad(): void {
    console.log('ya cargo')
      this.loading = false; // Oculta el spinner cuando el video esté listo
    }
  
    onVideoError(): void {
      this.loading = false; // Oculta el spinner en caso de error
      console.error('Error al cargar el video');
    }
}