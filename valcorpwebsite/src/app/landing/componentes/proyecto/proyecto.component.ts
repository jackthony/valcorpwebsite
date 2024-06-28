import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-proyecto',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './proyecto.component.html',
  styleUrl: './proyecto.component.scss'
})
export class ProyectoComponent {

  casa = faHouseChimney;
}
