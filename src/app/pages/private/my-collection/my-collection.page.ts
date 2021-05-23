import { Component, OnInit } from '@angular/core';
import { Path } from '@app/@core/structs';

@Component({
  templateUrl: './my-collection.page.html',
  styleUrls: ['./my-collection.page.scss'],
})
export class MyCollectionPage implements OnInit {
  path = Path;
  images = [{}]
  constructor() {}

  ngOnInit(): void {
    this.images = [
      {
      path: "https://map.viamichelin.com/map/carte?map=viamichelin&z=10&lat=46.45607&lon=15.62979&width=550&height=382&format=png&version=latest&layer=background&debug_pattern=.*"
      }, 
      {
        path : "./assets/images/img-7.jpg"
      }
      
    ]
  }
}
