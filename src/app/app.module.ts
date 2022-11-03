import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './main/directives/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ActuComponent } from './main/pages/actu/actu.component';
import { TodoListComponent } from './main/pages/todos/todo-list/todo-list.component';
import { ErrorComponent } from './main/error/error.component';
import { TodoItemComponent } from './main/pages/todos/todo-item/todo-item.component';
import { PostListComponent } from './main/pages/posts/post-list/post-list.component';
import { PostItemComponent } from './main/pages/posts/post-item/post-item.component';
import { PostCommentsComponent } from './main/pages/posts/post-comments/post-comments.component';
import { CommentListComponent } from './main/pages/comments/comment-list/comment-list.component';
import { CommentItemComponent } from './main/pages/comments/comment-item/comment-item.component';
import { RandomizePipe } from './main/pipes/randomize.pipe';
import { UserProfileComponent } from './main/pages/profil/user-profile/user-profile.component';
import { UserAlbumComponent } from './main/pages/profil/user-album/user-album.component';
import { UserPhotoComponent } from './main/pages/profil/user-photo/user-photo.component';
import { ProfileNavbarComponent } from './main/pages/profil/profile-navbar/profile-navbar.component';
import { UserPostComponent } from './main/pages/profil/user-post/user-post.component';
import { MainProfileComponent } from './main/pages/profil/main-profile/main-profile.component';
import { LoginComponent } from './account/login/login.component';
import { FormsModule } from '@angular/forms';
import { ROUTING } from './app.routing.module';
import { CommonModule } from '@angular/common';
import { QueryComponent } from './main/pages/query/query.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ActuComponent,
    TodoListComponent,
    ErrorComponent,
    TodoItemComponent,
    PostListComponent,
    PostItemComponent,
    PostCommentsComponent,
    CommentListComponent,
    CommentItemComponent,
    RandomizePipe,
    UserProfileComponent,
    UserAlbumComponent,
    UserPhotoComponent,
    ProfileNavbarComponent,
    UserPostComponent,
    MainProfileComponent,
    LoginComponent,
    QueryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ROUTING,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
