import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

  @Input() imgUrlBanner?: string;
  @Input() logoUrlProyecto?: string;
  @Input() color?: string;
  @Input() colorParrafoInicio?: string;
  @Input() vidUrl?: string;

  


}
