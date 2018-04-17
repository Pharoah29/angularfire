import { FirebaseDatabaseComponent } from './components/firebase-database/firebase-database.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';

const routes: Routes = [

    {path:'', component: GalleryComponent},
    {path:'gallery', component: GalleryComponent},
    {path:'firebase', component: FirebaseDatabaseComponent},
    {path:'bookmarks', component: BookmarksComponent, runGuardsAndResolvers: 'always'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
