import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';

@Component({
  selector: 'app-prados-proximamente',
  standalone: true,
  imports: [],
  templateUrl: './prados-proximamente.component.html',
  styleUrl: './prados-proximamente.component.css'
})
export class PradosProximamenteComponent implements OnInit{
@Output() sendLoad = new EventEmitter<boolean>();
  ngOnInit(): void {
    this.sendLoad.emit(true);
  }

}
