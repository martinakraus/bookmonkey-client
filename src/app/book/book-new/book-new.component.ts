import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { BookApiService } from "../book-api.service";
import { take } from "rxjs";
import { Book } from "../book";
import { Router } from "@angular/router";

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrl: './book-new.component.scss'
})
export class BookNewComponent {
  form = this.formBuilder.nonNullable.group({
    isbn: ['', [Validators.required]],
    title: ['', [Validators.required]],
    subtitle: [''],
    author: ['', [Validators.required]],
    abstract: [''],
  });

  constructor(private readonly formBuilder: FormBuilder,
              private readonly bookApiService: BookApiService,
              private readonly router: Router) {
  }

  submit() {
    this.bookApiService.create(this.form.getRawValue() as Book).pipe(take(1)).subscribe(() => {
      this.router.navigate(['/books']);
    })
  }
}
