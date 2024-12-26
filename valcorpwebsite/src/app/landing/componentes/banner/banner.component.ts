import { NgIf, NgStyle } from '@angular/common';
import { Component, EventEmitter, inject, Input,input, OnInit, Output, output } from '@angular/core';
import { MatRippleLoader } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [NgStyle,NgIf,MatProgressSpinnerModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements OnInit {
  public title = inject(Title);
  public meta = inject(Meta); 

  ngOnInit(): void {
    try {
      // Establecer título dinámico
      this.title.setTitle(this.titlePage! + ' - ValCorp');

      // Actualizar metadatos
      this.meta.updateTag({ name: 'description', content: 'Página de' + this.titlePage });
      this.meta.updateTag({ property: 'og:title', content: 'Página de' + this.titlePage });
      this.meta.updateTag({ name: 'keywords', 
        content: 'ValCorp Inmobiliaria, bienes raíces Chimbote, compra de terrenos, proyectos urbanísticos, viviendas en Chimbote, financiamiento inmobiliario, Urb. Los Prados, Urb. Los Robles,Urb. Los Huertos de San Jose' });
    } catch (error) {
      console.error('Error al configurar metadatos:', error);
    }
  }

  @Input() imgUrlBanner?: string;
  @Input() logoUrlProyecto?: string;
  @Input() color?: string;
  @Input() colorParrafoInicio?: string;
  @Input() vidUrl?: string;
  @Input() pdfUrl?: string;
  @Input() titlePage?: string;
  @Input() tipo_grafia?: string;
  @Output() load = new EventEmitter<boolean>();  // Emite un booleano



   @Input('desconocido') nombre?: string;

   bannerLoaded: boolean = false;  // Flag que indica si la imagen ha sido cargada
 
   // Método que se ejecuta cuando la imagen se carga
   onBannerLoad() {
     this.bannerLoaded = true;
     this.load.emit(true);
   }
   openPdf(){
    const url = this.pdfUrl;
     window.open(url, '_blank'); // Abre en una nueva pestaña
   }

}
