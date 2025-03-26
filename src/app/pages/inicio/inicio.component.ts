import { Component, inject } from '@angular/core';
import { PostService } from '../../services/post.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-inicio',
  imports: [RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  constructor(private postService: PostService) {}

  get posts() {
    return this.postService.listPosts();
  }

}
