import { Router, RouterModule, Routes } from '@angular/router';
import { ActuComponent } from './pages/actu/actu.component';
import { AppComponent } from '../app.component';
import { ErrorComponent } from './error/error.component';
import { PostCommentsComponent } from './pages/posts/post-comments/post-comments.component';
import { UserAlbumComponent } from './pages/profil/user-album/user-album.component';
import { UserPostComponent } from './pages/profil/user-post/user-post.component';
import { TodoListComponent } from './pages/todos/todo-list/todo-list.component';
import { MainProfileComponent } from './pages/profil/main-profile/main-profile.component';
import { LoginComponent } from '../account/login/login.component';
import { UserPhotoComponent } from './pages/profil/user-photo/user-photo.component';
import { QueryComponent } from './pages/query/query.component';

const MAIN_ROUTING: Routes = [
  // { path: '', component: AppComponent,
  //   children: [
      { path: '', redirectTo:'actu', pathMatch:"full" },
      // { path: 'login', component: LoginComponent },
      { path: 'actu', component: ActuComponent },
      { path: 'todos/:id', component: TodoListComponent },
      {path: 'profile/:id',component: MainProfileComponent,
        children: [
          { path: '', redirectTo:'posts', pathMatch:"full" },
          { path: 'posts', component: UserPostComponent },
          { path: 'albums', component: UserAlbumComponent },
          { path: 'albums/:id', component: UserPhotoComponent },
        ],
      },
      { path: 'posts/:id/comments', component: PostCommentsComponent },
  //   ]
  // },
      { path: 'search/:q', component: QueryComponent },
      { path: '**', component: ErrorComponent },

];

export const MAINROUTING = RouterModule.forChild(MAIN_ROUTING);
