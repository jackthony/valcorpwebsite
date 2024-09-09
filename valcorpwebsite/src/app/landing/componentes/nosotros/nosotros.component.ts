import { NgIf } from '@angular/common';
import { Component ,HostListener,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [NgIf],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export default class NosotrosComponent {
 currentWidth : number = 1200;
 

 @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.currentWidth = event.target.innerWidth;
    console.log('Nuevo ancho de la ventana:', this.currentWidth);
    // Aquí puedes ejecutar lógica adicional cuando el tamaño cambia.
  }
}
