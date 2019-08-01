import { Component, OnInit } from '@angular/core';
import { DvdService } from '../services/dvd.service';
import { Observable } from 'rxjs/internal/Observable';
import { Dvd } from '../models/dvd';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dvd',
  templateUrl: './dvd.component.html',
  styleUrls: ['./dvd.component.scss']
})
export class DvdComponent implements OnInit {

  dvds$: Observable<Dvd[]>;

  constructor(private dvdService: DvdService, private router: Router) { }

  ngOnInit() {
    this.dvds$ = this.dvdService.dvds$;
  }

  goDetails(i: number, dvd: Dvd) {
    this.router.navigate([`dvds/${i}`, { title: dvd.title }]);
  }

}
