import { FirebaseDatabaseComponent } from './components/firebase-database/firebase-database.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, CanActivate, RouterModule } from '@angular/router';
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
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
