import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { BookComponent } from "./book/book.component";
import { AboutComponent } from "./about/about.component";
import { BookDetailComponent } from "./book/book-detail/book-detail.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/about'
  },
  {
    path: 'books',
    component: BookComponent
  },
  {
    path: 'books/:isbn',
    component: BookDetailComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {bindToComponentInputs: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
