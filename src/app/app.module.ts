
import { environment } from './../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { RepoService } from './services/repo.service';
import { SharedService } from './services/shared.service';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';



import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginGuard } from './login.guard';
import { AuthService } from './services/auth.service';
import { CoreModule } from './core.module';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    BookmarksComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CoreModule
  ],
  providers: [RepoService, SharedService, LoginGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
