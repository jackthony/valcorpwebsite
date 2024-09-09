import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component, Signal, signal } from '@angular/core';
import { SwiperContainer, register } from 'swiper/element/bundle';
register()
@Component({
  selector: 'app-familia',
  standalone: true,
  imports: [CommonModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './familia.component.html',
  styleUrls: ['./familia.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FamiliaComponent {
  
   ngOnInit(): void{
    
   }

}
