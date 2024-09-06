import { Component } from '@angular/core';
import { HeaderComponent } from "../../componentes/header/header.component";
import { ProyectosComponent } from "../../proyectos/proyectos.component";
import { FamiliaComponent } from "../../familia/familia.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],  // Cambiado a styleUrls
    imports: [HeaderComponent, ProyectosComponent, FamiliaComponent]
})
export default class HomeComponent {
    // Tu lógica aquí
}
