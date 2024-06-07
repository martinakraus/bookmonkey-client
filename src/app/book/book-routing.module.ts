import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { BookComponent } from "./book.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";

const routes: Routes = [
  {
    path: '',
    component: BookComponent
  },
  {
    path: ':isbn',
    component: BookDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule {
}
