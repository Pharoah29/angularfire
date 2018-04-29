
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, CanActivate, RouterModule } from '@angular/router';
import { FirebaseDatabaseComponent } from './components/firebase-database/firebase-database.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { AppComponent } from './app.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginGuard } from './login.guard';


const routes: Routes = [

    {path:'', component: HomeComponent, 
              canActivate: [LoginGuard], 
              children:[

                {path:'gallery', component: GalleryComponent},
                {path:'firebase', component: FirebaseDatabaseComponent},
                {path:'bookmarks', component: BookmarksComponent, runGuardsAndResolvers: 'always'},
                {path:'', redirectTo:'gallery', pathMatch:'full'}
              ]},

    {path:'login', component: LoginComponent},
    {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  declarations:[    
    GalleryComponent,
    BookmarksComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent],

  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes,{onSameUrlNavigation:'reload'})],

  exports: [RouterModule],
  
  providers:[LoginGuard]
})
export class AppRoutingModule { }
