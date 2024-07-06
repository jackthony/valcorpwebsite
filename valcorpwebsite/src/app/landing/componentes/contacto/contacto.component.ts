import { NgStyle } from '@angular/common';
import {Component, input} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule,MatButtonModule,NgStyle],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
})
export class ContactoComponent {
    color = input<string>();


}
