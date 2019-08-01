import { Component, OnInit } from '@angular/core';
import { DvdService } from '../services/dvd.service';
import { Observable } from 'rxjs/internal/Observable';
import { Dvd } from '../models/dvd';

@Component({
  selector: 'app-dvd',
  templateUrl: './dvd.component.html',
  styleUrls: ['./dvd.component.scss']
})
export class DvdComponent implements OnInit {

  dvds$: Observable<Dvd[]>;

  constructor(private dvdService: DvdService) { }

  ngOnInit() {
    this.dvds$ = this.dvdService.dvds$;
  }

}
