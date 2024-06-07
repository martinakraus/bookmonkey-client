import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { BookComponent } from "./book.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { confirmDeactivateGuard } from "./confirm-deactivate.guard";
import { BookNewComponent } from "./book-new/book-new.component";

const routes: Routes = [
  {
    path: '',
    component: BookComponent
  },
  {
    path: 'new',
    component: BookNewComponent
  },
  {
    path: ':isbn',
    component: BookDetailComponent,
    canDeactivate: [confirmDeactivateGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule {
}
