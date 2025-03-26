import { Component, inject, Input } from '@angular/core';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-tu-post',
  imports: [CommonModule],
  templateUrl: './tu-post.component.html',
  styleUrl: './tu-post.component.css'
})
export class TuPostComponent {
  @Input() id: string | undefined;
  postService = inject(PostService);

  get post(){
    return this.postService.getById(Number(this.id))
  }
}

