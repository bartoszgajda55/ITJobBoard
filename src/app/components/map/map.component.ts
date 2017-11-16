import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MapComponent implements OnInit {
  lat: number = 55.86515;
  lng: number = -4.25763;
  zoom: number = 14;

  constructor() { }

  ngOnInit() {
  }

}
