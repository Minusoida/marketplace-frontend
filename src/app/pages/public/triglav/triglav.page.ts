import { Component, OnInit } from '@angular/core';
import { Path } from '@core/structs';

@Component({
  templateUrl: './triglav.page.html',
  styleUrls: ['./triglav.page.scss'],
})
export class TriglavPage implements OnInit {
  path = Path;
  tokenName: string = 'Triglav';
  givenFunding: number = 20;
  wantedFunding: number = 100;
  price: number = 20;
  constructor() {}

  ngOnInit(): void {}
}
