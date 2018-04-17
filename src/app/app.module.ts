
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

import { FirebaseDatabaseComponent } from './components/firebase-database/firebase-database.component';
import { FirebaseDatabaseService } from './services/firebase-database.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';

export const firebaseConfig = environment.firebaseConfig;


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    BookmarksComponent,
    FirebaseDatabaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,


  ],
  providers: [RepoService, SharedService, FirebaseDatabaseService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
