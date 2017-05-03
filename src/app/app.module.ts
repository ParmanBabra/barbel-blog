import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostFormComponent } from './Posts/post-form/post-form.component';
import { PostImageComponent } from './Posts/post-image/post-image.component';
import { PostListComponent } from './Posts/post-list/post-list.component';
import { PostComponent } from './Posts/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostsComponent,
    PostFormComponent,
    PostImageComponent,
    PostListComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
