import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookCardComponent } from "./book-card/book-card.component";
import { HoverHighlightDirective } from "./hover-highlight.directive";
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookRoutingModule } from "./book-routing.module";

@NgModule({
  declarations: [
    BookComponent,
    BookCardComponent,
    HoverHighlightDirective,
    BookDetailComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule
  ]
})

export class BookModule {
}
