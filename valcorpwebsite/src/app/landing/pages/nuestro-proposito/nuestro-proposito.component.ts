import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

interface FAQ {
  question: string;
  answer: string;
  open: boolean;
}
@Component({
  selector: 'app-nuestro-proposito',
  standalone: true,
  imports: [NgClass,FontAwesomeModule],
  templateUrl: './nuestro-proposito.component.html',
  styleUrl: './nuestro-proposito.component.css'
})
export default class NuestroPropositoComponent {
  
   up = faArrowAltCircleUp;
   down = faArrowCircleDown;


  faqs: FAQ[] = [
    { question: '¿Qué significa Sin Intereses?', answer: 'Explicación sobre lo que significa sin intereses.', open: false },
    { question: '¿Cómo puedo visitar los proyectos?', answer: 'Detalles sobre cómo visitar los proyectos.', open: false },
    { question: '¿Cuándo se entregan los proyectos?', answer: 'Información sobre las fechas de entrega.', open: false },
    { question: '¿Dónde están ubicados los proyectos?', answer: 'Ubicaciones de los proyectos.', open: false },
    { question: '¿Por qué comprar en ValCorp Inmobiliaria?', answer: 'Razones para comprar en ValCorp Inmobiliaria.', open: false },
    { question: '¿Qué es Crédito Directo?', answer: 'Definición de crédito directo.', open: false },
    { question: '¿Necesito historial crediticio?', answer: 'Información sobre la necesidad de historial crediticio.', open: false }
  ];

  toggleFAQ(faq: FAQ) {
    faq.open = !faq.open;
  }
}
