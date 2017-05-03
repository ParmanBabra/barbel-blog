import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Post } from '../shared/post.model'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  @Input() posts : Post[];
  @Output() buttonClick = new EventEmitter();
  constructor() { }
  onClick() {
    this.buttonClick.emit(null);
  }
}
