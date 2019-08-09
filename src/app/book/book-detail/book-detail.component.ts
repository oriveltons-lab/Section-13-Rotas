import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit() {
    // retorna somente na construção do component
    console.log('Index Snapshot', this.route.snapshot.paramMap.get('index'));
    // retorna sempre atualizado :)
    this.route.paramMap.subscribe((params: ParamMap) => console.log('Index with subscribe', params.get('index')));
  }

}
