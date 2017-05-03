import { Component, OnInit } from '@angular/core';
import { Post } from './shared/post.model'
import { View } from './shared/view.enum'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: Post[] = [];
  View = View;
  currentView = View.SHOW_ALL;
  constructor() { }

  createPost(post: Post){
    this.posts.push(post);
    this.changeCurrentView(View.SHOW_ALL);
  }

  changeCurrentView(view : View){
    this.currentView = view;
  }
}
