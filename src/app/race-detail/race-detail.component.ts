import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-race-detail',
  templateUrl: './race-detail.component.html',
  styleUrls: ['./race-detail.component.css']
})
export class RaceDetailComponent implements OnInit {

  private raceId;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.forEach(
      (params: Params) => this.raceId = params['id']
    );
  }

}
