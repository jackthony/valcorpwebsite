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
    { question: '¿Qué significa Sin Intereses?', answer: 'En ValCorp Inmobiliaria ofrecemos este beneficio durante un periodo de 60 meses, en todos nuestros proyectos urbanos. Esto significa no pagar montos extras, sino el valor exacto del lote cuando firma contrato.', open: false },
    { question: '¿Cómo puedo visitar los proyectos?', answer: 'Comunícate al 916 792 621 o acércate a nuestros stands de venta. Nuestros asesores estarán muy contentos de llevarlos gratuitamente a conocer nuestros proyectos.', open: false },
    { question: '¿Cuándo se entregan los proyectos?', answer: 'El proyecto Urb. Villa Los Robles es el más próximo a entregarse en este 2024. Sin embargo, el proyecto Urb. Los Huertos de San José está programado a entregarse en diciembre del 2025. Cabe indicar que los proyectos se entregarán completamente saneados y con todos las zonas exclusivas de acuerdo a cada proyecto.', open: false },
    { question: '¿Dónde están ubicados los proyectos?', answer: 'En caso quiera visitar por su cuenta nuestros proyectos. Puede encontrarnos en el KM 7.5 de la Av. Buenos Aires – Chimbote, a solo 2 minutos del Recreo Campestre La Fontana. En nuestras oficinas del proyecto estará un asesor de ventas en caso requiera solventar sus dudas.', open: false },
    { question: '¿Por qué comprar en ValCorp Inmobiliaria?', answer: 'Nuestros proyectos se entregan con título de propiedad independiente. Además, tenemos Habilitaciones Urbanas debidamente aprobadas por la Municipalidad Provincial del Santa. Todas nuestras urbanizaciones cuentan con servicios básicos y beneficios de las grandes ciudades. Cabe mencionar que somos la única inmobiliaria en Chimbote que no te cobra intereses, dando la oportunidad a las familias chimbotanas de pagar su casa propia hasta en 60 meses sin intereses.', open: false },
    { question: '¿Qué es Crédito Directo?', answer: 'Igual que las inmobiliarias más importantes del país, somos independientes de bancos o financieras. De esta forma podemos facilitar a cientos de familias chimbotanas a acceder a todos nuestros beneficios como: descuentos, promociones y más. Sin papeleos, ni evaluaciones engorrosas.', open: false },
    { question: '¿Necesito historial crediticio?', answer: 'No, no lo necesitas. Debido a que la inmobiliaria no trabaja con bancos o financieras. De esta forma se otorga la misma oportunidad a todas las familias chimbotanas de comprar su futuro hogar.', open: false }
  ];

  toggleFAQ(faq: FAQ) {
    faq.open = !faq.open;
  }
}
