import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import ProyectoHuertosComponent from './proyecto-huertos/proyecto-huertos.component';
import ProyectoPradosComponent from './proyecto-prados/proyecto-prados.component';
import ProyectoRoblesComponent from './proyecto-robles/proyecto-robles.component';

@Component({
  selector: 'app-proyecto-robles',
  standalone: true,
  imports: [RouterOutlet,ProyectoRoblesComponent,ProyectoHuertosComponent,ProyectoPradosComponent],
  templateUrl: './proyectos-pages.component.html',
})
export default class  ProyectosPagesComponent {

}
