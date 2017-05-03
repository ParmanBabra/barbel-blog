import { Component, OnInit, EventEmitter ,Output } from '@angular/core';
import { Post } from '../shared/post.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  @Output() formSubmit = new EventEmitter();

  model: Post = new Post();
  

  constructor(){
    this.resetPost();
  }

  private resetPost(){
    this.model = new Post();
  }

  createPost(){
    this.formSubmit.emit(this.model);
    this.resetPost();
  }

  changeImage(image){
    this.model.image = image;
  }
}
