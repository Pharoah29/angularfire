import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { environment } from './../environments/environment';

import { FirebaseDatabaseComponent } from './components/firebase-database/firebase-database.component';

import { FirebaseDatabaseService } from './services/firebase-database.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';


export const firebaseConfig = environment.firebaseConfig;


@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  declarations: [FirebaseDatabaseComponent],
  providers: [FirebaseDatabaseService, AngularFirestore]
})

export class CoreModule { }
