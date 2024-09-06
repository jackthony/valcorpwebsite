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
  isChatOpen = false;  // Añadir una propiedad para controlar la visibilidad del chat

  // Método para abrir la ventana de chat
  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
  }
  sendWhatsAppMessage() {
  const telephone = '51916792621';  // El número de WhatsApp
  const message = 'Hola, quisiera comunicarme con ustedes.';  // El mensaje predefinido
  const url = `https://api.whatsapp.com/send?phone=${telephone}&text=${encodeURIComponent(message)}`;
  
  window.open(url, '_blank');
  this.toggleChat();  // Cierra la ventana de chat después de enviar el mensaje
}
}
