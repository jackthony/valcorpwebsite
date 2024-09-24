import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp-button.component.html',
  styleUrls: ['./whatsapp-button.component.css']
})
export class WhatsappButtonComponent {

  // Método para redirigir al número de WhatsApp en una nueva pestaña
  sendWhatsAppMessage() {
    const telephone = '51916792621';  // El número de WhatsApp
    const message = 'Hola Grupo ValCorp, Quisiera información sobre';  // El mensaje predefinido
    const url = `https://api.whatsapp.com/send?phone=${telephone}&text=${encodeURIComponent(message)}`;
    
    // Abre la URL de WhatsApp en una nueva pestaña
    window.open(url, '_blank');  
  }
}
