import { Component, OnInit } from '@angular/core';
import { Path } from '@core/structs';

@Component({
  templateUrl: './hexagons.page.html',
  styleUrls: ['./hexagons.page.scss'],
})
export class HexagonsPage implements OnInit {
  path = Path;
  HexagonsName: string = 'Škocjanske jame';
  givenFunding: number = 20;
  wantedFunding: number = 100;
  price: number = 20;
  constructor() {}

  ngOnInit(): void {}
}
