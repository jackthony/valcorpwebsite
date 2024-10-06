import { ChangeDetectionStrategy, Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { filter } from 'rxjs/operators';  // Necesitamos 'filter' para evitar entradas repetitivas
import {TooltipPosition, MatTooltipModule} from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '../../../layout/alert/alert.component';
import { Observable } from 'rxjs';
import { NotificacionComponent } from '../../../layout/notificacion/notificacion.component';
import { ChangeDetectorRef } from '@angular/core';
import { MatSpinner } from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
@Component({
  selector: 'app-libro-reclamaciones',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule,
     MatInputModule, MatSelectModule, MatFormFieldModule, 
     MatButtonModule, MatTooltipModule,NotificacionComponent,MatSpinner, FormsModule, MatRadioModule,MatCardModule,MatCheckboxModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './libro-reclamaciones.component.html',
  styleUrls: ['./libro-reclamaciones.component.css']
})
export default class LibroReclamacionesComponent  implements OnInit{

  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  @Input() mostrarNotificacion:boolean = false;
  mostrarNotiError!:boolean;
  reclamoForm: FormGroup;
  loading:boolean = false;
  departamentos = ['Amazonas', 'Ancash', 'Apurimac', 'Arequipa'];
  provincias = ['Provincia 1', 'Provincia 2', 'Provincia 3'];
  distritos = ['Distrito 1', 'Distrito 2', 'Distrito 3'];
  proyectos = ['Proyecto1', 'Proyecto2'];

  constructor(private fb: FormBuilder,private dialog:MatDialog,private cdr: ChangeDetectorRef) {
    this.reclamoForm = this.fb.group({
      nombreCompleto: ['', Validators.required],
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],  // Solo números
      correo: ['', [Validators.required, Validators.email]],
      documento: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],  // Solo números
      direccion: ['', Validators.required],
      departamento: ['', Validators.required],
      provincia: ['', Validators.required],
      distrito: ['', Validators.required],
      proyectoList: ['', Validators.required],
      montoReclamado: ['', [Validators.required, Validators.pattern('^(S/\\s?)?\\d+(\\.\\d{1,2})?$')]],  // Solo números y decimales
      detalleReclamo: ['', Validators.required],
      tipoReclamo: ['', Validators.required],

    });

    // Escuchar cambios en el campo "Monto Reclamado"
    this.reclamoForm.get('montoReclamado')?.valueChanges
      .pipe(filter(value => value && !value.startsWith('S/')))  // Evita prefijo duplicado
      .subscribe(value => {
        this.reclamoForm.patchValue({
          montoReclamado: `S/ ${value}`
        }, { emitEvent: false });  // Evitar emitir evento para no causar bucles infinitos
      });
  }
  ngOnInit(): void {
  }


  onSubmit() {
    
    this.loading = true;
    const dialogRef = this.dialog.open(AlertComponent,{
    })
    dialogRef.afterClosed().subscribe((res)=>{
      console.log(this.mostrarNotificacion)
        if(res){
          if (this.reclamoForm.valid) {
            // Enviar el correo usando EmailJS
            emailjs.send(
              'service_0jss4tb',  // Tu Service ID
              'template_29ybmsm', // Tu Template ID
              this.reclamoForm.value,  // Los valores del formulario
              'U8AJSYKAdhYUS25Qs'      // Tu User ID
            ).then((result: EmailJSResponseStatus) => {
              console.log(result.text);
              this.mostrarNotificacion = true;
              this.mostrarNotiError = true;
    this.loading = false;
              this.cdr.detectChanges();
              console.log('Correo enviado exitosamente');
            }, (error) => {
              this.loading = false;
              this.mostrarNotiError = false;
              this.cdr.detectChanges();
              console.error(error.text);
              alert('Error al enviar el correo');
            });
          } else {
            this.loading = false;
            this.mostrarNotificacion = true;
            this.mostrarNotiError = false;
            this.cdr.detectChanges();
            // Si el formulario no es válido, marcar todos los campos como "tocados"
            this.reclamoForm.markAllAsTouched();
          }
          this.reclamoForm.reset();
          this.cdr.detectChanges();
        }
    })
  }

  close(event:boolean){
    this.loading = false;
    this.mostrarNotificacion = event;
    this.cdr.detectChanges(); 
  }

}
