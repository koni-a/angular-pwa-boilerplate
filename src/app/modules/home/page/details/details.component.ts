import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from '@data/schema/project';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  project$: Observable<Project>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.project$ = this.route.data.pipe(map(data => data.project));
  }

}
