import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class JobListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
