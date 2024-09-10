import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-iconos',
  standalone: true,
  imports: [],
  templateUrl: './info-iconos.component.html',
  styleUrl: './info-iconos.component.css'
})
export class InfoIconosComponent implements OnInit{

    titulo= input('',{
      transform:(value:string) => value.toLocaleLowerCase()
    });

    @Input() tituloInput:string | undefined;
 
    ngOnInit(): void {
      console.log(this.tituloInput)
     }
}
