import { Component, Input, OnInit } from '@angular/core';
import { Project } from '@data/schema/project';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  constructor() { }
  
  @Input() project: Project;

  flipped = false;

  ngOnInit(): void {
  }

}
