import { Component, OnInit } from '@angular/core';
import { BooksService } from './product-list.component.service';
import { Book } from './model/Book';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros: any;
  bookService: BooksService


  constructor(bookService : BooksService) { 

    this.bookService = bookService

  }

  ngOnInit(): void {

    this.bookService.getBook().subscribe(((data: any) => {

      this.livros = data.books.splice(0,6)
      console.log(this.livros)

    }))
  }

}
