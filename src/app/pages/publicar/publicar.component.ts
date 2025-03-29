import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-publicar',
  imports: [ReactiveFormsModule],
  templateUrl: './publicar.component.html',
  styleUrl: './publicar.component.css'
})
export class PublicarComponent {

  router = inject(Router);
  postService = inject(PostService);


  nuevoViajeForm: FormGroup= new FormGroup({
   
  
    titulo: new FormControl('', [Validators.required]),
  
    texto: new FormControl('', [Validators.required]),
  
    autor: new FormControl('', [Validators.required]),
  
    imagen: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i)
    ]),
    
  
    fecha: new FormControl('', [Validators.required]),
    
    categoria: new FormControl('', [Validators.required])
  })
  
 submitForm() {
    if (this.nuevoViajeForm.valid) {
      const viajeData = this.nuevoViajeForm.value;
      this.postService.addPost(viajeData);
      this.router.navigate(['/tupost', viajeData.id]);

     
    } else {
      console.warn("Formulario inválido");
    }
  }


  checkError(field: string, errorName: string): boolean {
    const control = this.nuevoViajeForm.get(field);
    return control ? control.hasError(errorName) && control.touched : false;
  }
  
  
}