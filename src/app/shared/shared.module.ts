import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './album/album.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotoComponent } from './photo/photo.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentComponent } from './comment/comment.component';
import { NavComponent } from './nav/nav.component';
import {SharedRoutingModule} from './shared-routing.module'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [UsersComponent, UserComponent, TodosComponent, TodoComponent, PostsComponent, PostComponent, AlbumsComponent, AlbumComponent, PhotosComponent, PhotoComponent, CommentsComponent, CommentComponent, NavComponent],
  imports: [
    CommonModule,SharedRoutingModule,HttpClientModule
  ],
  exports:[NavComponent,UsersComponent]
})
export class SharedModule { }

export {UsersComponent}
