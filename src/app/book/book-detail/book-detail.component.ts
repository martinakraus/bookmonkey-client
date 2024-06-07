import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { BookApiService } from "../book-api.service";
import { Observable, switchMap } from "rxjs";
import { Book } from "../book";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss'
})
export class BookDetailComponent implements OnInit {
  route = inject(ActivatedRoute);
  bookApiService = inject(BookApiService);
  book$!: Observable<Book>;

  ngOnInit() {
    this.book$ = this.route.params.pipe(
      switchMap(params => this.bookApiService.getByIsbn(params?.['isbn']))
    );
  }
}
