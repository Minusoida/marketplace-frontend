import { Component, OnInit } from '@angular/core';
import { Path } from '@app/@core/structs';

@Component({
  templateUrl: './my-collection.page.html',
  styleUrls: ['./my-collection.page.scss'],
})
export class MyCollectionPage implements OnInit {
  path = Path;

  constructor() {}

  ngOnInit(): void {}
}
