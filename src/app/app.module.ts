import { environment } from './../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { RepoService } from './services/repo.service';
import { SharedService } from './services/shared.service';

import { AuthService } from './services/auth.service';
import { CoreModule } from './core.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CoreModule
  ],
  providers: [RepoService, SharedService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
