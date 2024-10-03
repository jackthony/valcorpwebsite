import { Component, Input, input, OnInit } from '@angular/core';
import { MatSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-info-iconos',
  standalone: true,
  imports: [MatSpinner],
  templateUrl: './info-iconos.component.html',
  styleUrl: './info-iconos.component.css'
})
export class InfoIconosComponent implements OnInit{
     
  loading:number = 5000

    titulo= input('',{
      transform:(value:string) => value.toLocaleLowerCase()
    });

    @Input() tituloInput:string | undefined;
 
    ngOnInit(): void {
      console.log(this.tituloInput)
     }
}
