import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    [0, 0, 3.57],
    [0, 0, 3.57],
    [0, 0, 3.57],
    [0, 0, 3.57],
    [0, 0, 3.57],
    [0, 0, 3.57],
    [0, 0, 3.57],
    [0, 0, 3.57],
    [0, 0, 3.57],
    [0, 0, 3.57],
    [0, 0, 3.57],
    [0, 0, 3.57],
    [0, 0, 3.57],
    [1, 20, 3.57],
    [1, 20, 3.57],
    [1, 20, 3.57],
    [1, 20, 3.57],
    [2, 20, 3.57],
    [0, 0, 3.57],
    [0, 0, 3.57],
    [0, 0, 3.57],
    [0, 0, 3.57],
    [1, 20, 3.57],
    [4, 20, 3.57],
    [4, 20, 3.57],
    [1, 20, 3.57],
    [1, 20, 3.57],
    [2, 20, 3.57],
    [0, 0, 3.57],
    [0, 0, 3.57],
    [0, 0, 3.57],
    [1, 20, 3.57],
    [1, 20, 3.57],
    [1, 20, 3.57],
    [1, 20, 3.57],
    [1, 20, 3.57],
    [2, 20, 3.57],
    [0, 0, 3.57],
    [0, 0, 3.57],
    [0, 0, 3.57],
    [0, 0, 3.57],
    [1, 20, 3.57],
    [1, 20, 3.57],
    [1, 20, 3.57],
    [1, 20, 3.57],
    [1, 20, 3.57],
    [1, 20, 3.57],
    [0, 0, 3.57],
    [0, 0, 3.57],
    [0, 0, 3.57],
    [0, 0, 3.57],
    [1, 20, 3.57],
    [1, 20, 3.57],
    [1, 20, 3.57],
    [1, 20, 3.57],
    [1, 20, 3.57],
    [0, 0, 3.57],
    [0, 0, 3.57],
    [0, 0, 3.57],
    [0, 0, 3.57],
    [0, 0, 3.57],
    [0, 0, 3.57],
    [0, 0, 3.57],
    [0, 0, 3.57],
    [0, 0, 3.57],
    [0, 0, 3.57],
    [0, 0, 3.57],
    [0, 0, 3.57],
    [0, 0, 3.57],
    [0, 0, 3.57],
    [0, 0, 3.57],
    [0, 0, 3.57],
    [0, 0, 3.57],
  ];
  popup: boolean = false;
  popupIx: number = 0;
  cart: number[] = [];
  popupDelete: any;
  popupDeleteIx: number = 0;
  popupBought: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  buttonOnClick(event:any, ix:number, state: number) {
    if (state === 1) {
      this.items[ix][0] = 3
      this.popup = true;
      this.popupIx = ix;
    } else if (state === 3) {
      this.popupDeleteIx = ix;
      this.popupDelete = true
    }
  }

  cancelPopup() {
    this.popup = false;
    this.items[this.popupIx][0] = 1;
  }

  cancelPopupDelete() {
    this.popupDelete = false
  }

  addToCart() {
    this.popup = false;
    this.cart.push(this.popupIx)
  }

  onExitClick(event: any) {
    this.router.navigateByUrl('/');
  }

  sumCart() {
    let sum = 0
    for (let ix = 0; ix < this.cart.length; ix++) {
      sum += this.items[this.cart[ix]][1]
    }
    return sum
  }

  removeFromCart() {
    this.popupDelete = false
    this.items[this.popupDeleteIx][0] = 1
    const index = this.cart.indexOf(this.popupDeleteIx, 0);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }

  buyTokens() {
    for (let ix = 0; ix < this.cart.length; ix++) {
      this.items[this.cart[ix]][0] = 4
    }
    this.cart = []
    this.popupBought = true;
  }

  cancelBought() {
    this.popupBought = false;
  }

  textFromState(state: number) {
    if(state === 0) {
      return ""
    } else if (state === 1) {
      return "Buy NFT"
    } else if (state === 2) {
      return "NFT taken"
    } else if (state === 3){
      return "Sell NFT"
    } else {
      return "You own it"
    }
  }
}
