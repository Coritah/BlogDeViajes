import { Component, inject } from '@angular/core';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-tu-post',
  imports: [CommonModule],
  templateUrl: './tu-post.component.html',
  styleUrl: './tu-post.component.css'
})
export class TuPostComponent {
  postService = inject(PostService);

  get last() {
    return this.postService.getLast();
  }

}