import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './landing/componentes/header/header.component';
import { ProyectosComponent } from './landing/proyectos/proyectos.component';
import { FamiliaComponent } from './landing/familia/familia.component';
import HomeComponent from './landing/pages/home/home.component';
import { signal, effect } from '@angular/core';
import { PieDePaginaComponent } from './landing/componentes/pie-de-pagina/pie-de-pagina.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { WhatsappButtonComponent } from './landing/componentes/whatsapp-button/whatsapp-button.component';
import { RouterModule } from './app.routes'; // RouterModule for routing
import { Meta, Title } from '@angular/platform-browser';
import { LoadingSpinnerComponent } from "./layout/loading-spinner/loading-spinner.component";

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
    ,
    LoadingSpinnerComponent
]
})
export class AppComponent implements OnInit{
  isLoading: boolean = true; // Control del spinner
  public title = inject(Title);
  public meta = inject(Meta);
  private currentUrl: string = ''; // Guarda la URL actual
  private isMainPage: boolean = true; // Indica si está en la página principal (inicio)
  private targetSection: string =''; // Sección a la que se desplazará al regresar a la página principal
  constructor(private router: Router) {
   
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        const isSameRoute = event.url === this.currentUrl;
        const isNavigatingToMain = event.url === '/' || event.url === '/inicio';

        if (!isSameRoute) {
          if (isNavigatingToMain) {
            this.isMainPage = true;
          } else {
            this.isMainPage = false;
          }
          this.isLoading = true; // Activa el spinner al cambiar de ruta
        }
      }

      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;

        setTimeout(() => {
          this.isLoading = false; // Oculta el spinner tras un breve retraso
        }, 1000);
      }
    });
  }
  ngOnInit(): void {
    try {
      // Establecer título dinámico
      this.title.setTitle('ValCorp');
      // Actualizar metadatos
      this.meta.updateTag({ name: 'description', content: 'ValCorp Inmobiliaria en Chimbote ofrece proyectos urbanísticos de calidad, facilitando la adquisición de terrenos y viviendas con servicios completos y financiamiento accesible.' });
      this.meta.updateTag({ property: 'og:title', content: 'ValCorp Inmobiliaria - Tu Hogar en Chimbote' });
      this.meta.updateTag({ name: 'keywords', 
        content: 'ValCorp Inmobiliaria, bienes raíces Chimbote, compra de terrenos, proyectos urbanísticos, viviendas en Chimbote, financiamiento inmobiliario, Urb. Los Prados, Urb. Los Robles,Urb. Los Huertos de San Jose' });
    } catch (error) {
      console.error('Error al configurar metadatos:', error);
    }
    setTimeout(() => {
      this.isLoading = false;
    }, 3000); // 3 segundos
  }
}
