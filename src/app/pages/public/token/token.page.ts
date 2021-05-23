import { Component, OnInit } from '@angular/core';
import { Path } from '@core/structs';

@Component({
  templateUrl: './token.page.html',
  styleUrls: ['./token.page.scss'],
})
export class TokenPage implements OnInit {
  path = Path;
  tokenName:string = "Triglavski narodni park"
  givenFunding: number = 20;
  wantedFunding: number = 100;
  price: number = 20;
  // item state:
  // 0: hidden
  // 1: free
  // 2: taken
  // 3: in cart
  // 4: owned by user that is logged in
  // Contains tuples of item states and prices
  items = [
    [0, 0, 3.57], [0, 0, 3.57], [0, 0, 3.57], [0, 0, 3.57], [0, 0, 3.57], [0, 0, 3.57], [0, 0, 3.57], [0, 0, 3.57], [0, 0, 3.57], [0, 0, 3.57],
    [0, 0, 3.57], [0, 0, 3.57], [0, 0, 3.57], [1, 20, 3.57], [1, 20, 3.57], [1, 20, 3.57], [1, 20, 3.57], [2, 20, 3.57], [0, 0, 3.57], [0, 0, 3.57], [0, 0, 3.57],
    [0, 0, 3.57], [1, 20, 3.57], [4, 20, 3.57], [4, 20, 3.57], [1, 20, 3.57], [1, 20, 3.57], [2, 20, 3.57], [0, 0, 3.57], [0, 0, 3.57], [0, 0, 3.57],
    [1, 20, 3.57], [1, 20, 3.57], [1, 20, 3.57], [1, 20, 3.57], [1, 20, 3.57], [2, 20, 3.57], [0, 0, 3.57], [0, 0, 3.57], [0, 0, 3.57], [0, 0, 3.57], [1, 20, 3.57],
    [1, 20, 3.57], [1, 20, 3.57], [1, 20, 3.57], [1, 20, 3.57], [1, 20, 3.57], [0, 0, 3.57], [0, 0, 3.57], [0, 0, 3.57], [0, 0, 3.57], [1, 20, 3.57],
    [1, 20, 3.57], [1, 20, 3.57], [1, 20, 3.57], [1, 20, 3.57], [0, 0, 3.57], [0, 0, 3.57], [0, 0, 3.57], [0, 0, 3.57], [0, 0, 3.57], [0, 0, 3.57], [0, 0, 3.57],
    [0, 0, 3.57], [0, 0, 3.57], [0, 0, 3.57], [0, 0, 3.57], [0, 0, 3.57], [0, 0, 3.57], [0, 0, 3.57], [0, 0, 3.57], [0, 0, 3.57], [0, 0, 3.57],
  ]

  popup: boolean = false;
  popupShare: number = 0;
  popupPrice: number = 0;
  popupIx: number = 0;
  cart: number[] = [];
  constructor() {}

  ngOnInit(): void {
  }

  buttonOnClick(event:any, ix:number, state: number) {
    if (state === 1) {
      this.items[ix][0] = 3
      this.popupPrice = this.items[ix][1]
      this.popupShare = this.items[ix][2]
      this.popup = true;
      this.popupIx = ix
    } else if (state === 3) {
      this.items[ix][0] = 1
      const index = this.cart.indexOf(ix, 0);
      if (index > -1) {
        this.cart.splice(index, 1);
      }
    }
  }

  cancelPopup() {
    this.popup = false
    this.items[this.popupIx][0] = 1
  }

  addToCart() {
    this.popup = false
    this.cart.push(this.popupIx)
  }

  sumCart() {
    let sum = 0
    for (let ix = 0; ix < this.cart.length; ix++) {
      sum += this.items[this.cart[ix]][1]
    }
    return sum
  }
}
