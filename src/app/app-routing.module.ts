import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DvdComponent } from 'src/app/dvd/dvd.component';
import { BookComponent } from 'src/app/book/book.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { DvdDetailComponent } from 'src/app/dvd/dvd-detail/dvd-detail.component';

const appRoutes: Routes = [
  { path: 'dvds', component: DvdComponent },
  { path: 'dvds/:index', component: DvdDetailComponent },
  { path: 'books', component: BookComponent },
  { path: '', pathMatch: 'full', redirectTo: 'dvds' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
