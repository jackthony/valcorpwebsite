import { NgIf, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input,input, Output, output } from '@angular/core';
import { MatRippleLoader } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [NgStyle,NgIf,MatProgressSpinnerModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

  @Input() imgUrlBanner?: string;
  @Input() logoUrlProyecto?: string;
  @Input() color?: string;
  @Input() colorParrafoInicio?: string;
  @Input() vidUrl?: string;
  @Input() pdfUrl?: string;
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
