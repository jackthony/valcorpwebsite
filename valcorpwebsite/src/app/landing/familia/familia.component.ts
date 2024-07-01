import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component, Signal, signal } from '@angular/core';
import { SwiperContainer, register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { CoverflowEffectOptions } from 'swiper/types';
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
   swiperElement = signal<SwiperContainer | null>(null);
  
   ngOnInit(): void{
      const swiperElementConstructor = document.querySelector('swiper-container');
      const swiperOptions: SwiperOptions = {
           effect:'coverflow',
           slidesPerView:1,
           breakpoints: {
            640:{
              slidesPerView:1,
            },
            1024: {
              slidesPerView:3,
            }
           },
           
      }
      Object.assign(swiperElementConstructor!,swiperOptions);
      this.swiperElement.set(swiperElementConstructor as SwiperContainer);
      this.swiperElement()?.initialize();
   }
}
