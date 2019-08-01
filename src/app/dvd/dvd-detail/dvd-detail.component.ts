import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DvdService } from '../../services/dvd.service';
import { Observable } from 'rxjs/internal/Observable';
import { Dvd } from 'src/app/models/dvd';

@Component({
  selector: 'app-dvd-detail',
  templateUrl: './dvd-detail.component.html',
  styleUrls: ['./dvd-detail.component.scss']
})
export class DvdDetailComponent implements OnInit {

  dvd$: Observable<Dvd>;

  constructor(private route: ActivatedRoute, private dvdService: DvdService) { }

  ngOnInit() {
    const index: number = +this.route.snapshot.paramMap.get('index');
    this.dvd$ = this.dvdService.get(index);
    // console.log('Index: ', this.route.snapshot.paramMap.get('index'));
    // this.route.paramMap.subscribe((params: ParamMap) => console.log('Index: ', params.get('index')));
  }
}
