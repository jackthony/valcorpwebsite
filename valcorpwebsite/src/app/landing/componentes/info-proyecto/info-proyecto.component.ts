import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-proyecto',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './info-proyecto.component.html',
  styleUrl: './info-proyecto.component.css'
})
export class InfoProyectoComponent {
  @Input() imgModelo?: string;
  @Input() color?: string;

}
