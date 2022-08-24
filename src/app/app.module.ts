import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './pages/topbar/topbar.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { UsersComponent } from './pages/users/users.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { TodoComponent } from './pages/todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    PhotosComponent,
    UsersComponent,
    CommentsComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
