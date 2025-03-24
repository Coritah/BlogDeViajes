import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// IMOPIRTAR SERVICIO


@Component({
  selector: 'app-inicio',
  imports: [ReactiveFormsModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  // meter el sevicio aqui
router = inject(Router)

nuevoViajeForm: FormGroup= new FormGroup({
  id: new FormControl('', [Validators.required]),

  titulo: new FormControl('', [Validators.required]),

  texto: new FormControl('', [Validators.required]),

  autor: new FormControl('', [Validators.required]),

  imagen: new FormControl('',[Validators.required]),

  fecha: new FormControl('', [Validators.required]),
  
  categoria: new FormControl('', [Validators.required])
})



}
