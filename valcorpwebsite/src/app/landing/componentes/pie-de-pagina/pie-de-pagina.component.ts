import { Component, Signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLocationDot, faEnvelope, faPhoneVolume} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp,  faFacebookF, faInstagramSquare,faYoutube } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-pie-de-pagina',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './pie-de-pagina.component.html',
  styleUrl: './pie-de-pagina.component.css'
})
export class PieDePaginaComponent {
  
   email= faEnvelope;
   ubicacion = faLocationDot;
   phone= faPhoneVolume;
   facebook = faFacebookF;
   instagram = faInstagramSquare;
   whatsapp = faWhatsapp;
   youtube = faYoutube;
}
