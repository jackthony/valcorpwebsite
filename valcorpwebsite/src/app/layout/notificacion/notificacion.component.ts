import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-notificacion',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './notificacion.component.html',
  styleUrl: './notificacion.component.css'
})
export class NotificacionComponent {
  @Input() mostrarNoti = false;
  @Input() colorBacground!:string;
  @Input() colorTexto!:string;
  @Input() tipo:boolean = false;
  @Input()  texto!:string;
@Output() ocultarNoti = new EventEmitter<boolean>()
progress = signal(0);

constructor() {

}

ngOnInit(): void {
  if(this.tipo === true){
    this.startPro()
  }
}

startPro() {
  const intervalId = setInterval(() => {
    this.progress.update(value => value + 1);
    if (this.progress() >= 180) {
      clearInterval(intervalId);
      this.progress.set(0);
      this.ocultarNoti.emit(false);
    }
  }, 30);  // Update every second
}


startProgress(valor:boolean): void {
  this.mostrarNoti = valor;
    if(this.progress() === 0){
      this.startPro();
    }
}

 close(){
     this.ocultarNoti.emit(false);
     this.progress.set(0);

 }
}
