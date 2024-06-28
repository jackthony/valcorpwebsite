import { Component } from '@angular/core';
import { ProyectoComponent } from '../componentes/proyecto/proyecto.component';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [ProyectoComponent],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.scss'
})
export class ProyectosComponent {

}
