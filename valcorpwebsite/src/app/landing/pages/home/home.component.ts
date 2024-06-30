import { Component } from '@angular/core';
import { HeaderComponent } from "../../componentes/header/header.component";
import { ProyectoComponent } from '../../componentes/proyecto/proyecto.component';
import { ProyectosComponent } from "../../proyectos/proyectos.component";
import { FamiliaComponent } from "../../familia/familia.component";
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeaderComponent, ProyectosComponent, FamiliaComponent]
})
export default class HomeComponent {

}