import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-facilidades-pago',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './facilidades-pago.component.html',
  styleUrl: './facilidades-pago.component.css'
})
export class FacilidadesPagoComponent {
  @Input() imgPromo?: string;
  @Input() imgPrecio?: string;
  @Input() imgModelo?: string;
  @Input() color?: string;


}
