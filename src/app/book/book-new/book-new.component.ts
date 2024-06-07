import { Component } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrl: './book-new.component.scss'
})
export class BookNewComponent {
  form = this.formBuilder.group({
    title: [''],
    subtitle: [''],
    author: [''],
    abstract: ['']
  });

  constructor(private readonly formBuilder: FormBuilder) {
  }

  submit() {
    console.log(this.form);
  }
}
