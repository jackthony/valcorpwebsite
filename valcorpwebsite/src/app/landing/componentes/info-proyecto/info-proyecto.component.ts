import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit, input } from '@angular/core'; // Importar EventEmitter correctamente
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { OpenDialogComponent } from '../../modal/open-dialog/open-dialog.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Transform } from 'stream';
import { InfoIconosComponent } from '../info-iconos/info-iconos.component';

@Component({
  selector: 'app-info-proyecto',
  standalone: true,
  imports: [NgStyle, MatDialogModule, MatProgressSpinnerModule, NgIf, NgFor,InfoIconosComponent],
  templateUrl: './info-proyecto.component.html',
  styleUrls: ['./info-proyecto.component.css']  // Cambiado a 'styleUrls' (array)
})
export class InfoProyectoComponent implements OnInit {
  @Input() imgModelo?: string;
  @Input() color?: string;
  @Input() tipo_grafia?: string;
  //signal
  tituloSignal = input({
     surname:'surTitulo',
     trasnform: (value:string) =>value.toUpperCase()
  });
  @Input() titulo!:string;

  @Output() load = new EventEmitter<any>();  // EventEmitter de '@angular/core'

  openModalXD = false;
  data!: any;
  isLoading: boolean = true;
  bannerLoaded = false;

  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
    this.onLoad()
  }

  openModalDetalles($event: Event) {
    this.openModalXD = true;
    console.log($event);
  }

  outModal() {
    this.openModalXD = false;
  }
    onLoad(){
      setTimeout(()=>{
    this.bannerLoaded = true;
    console.log('Banner loaded:', this.bannerLoaded);  // Verifica en la consola
    this.load.emit();  // Emitir evento de carga
      },2500)
    }
}
