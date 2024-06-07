import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { BookComponent } from "./book/book.component";
import { AboutComponent } from "./about/about.component";

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
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
