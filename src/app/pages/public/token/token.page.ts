import { Component, OnInit } from '@angular/core';
import { Path } from '@core/structs';

@Component({
  templateUrl: './token.page.html',
  styleUrls: ['./token.page.scss'],
})
export class TokenPage implements OnInit {
  path = Path;
  tokenName:string = "Škocjanske jame"
  givenFunding: number = 20;
  wantedFunding: number = 100;
  price: number = 20;
  constructor() {}

  ngOnInit(): void {
    console.log("ojal")
  }
}
