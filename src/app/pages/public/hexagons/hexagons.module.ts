import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HexagonsPage } from './Hexagons.page';

@NgModule({
  declarations: [HexagonsPage],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HexagonsPage,
        data: {
          title: 'Hexagons',
          robots: 'noindex, nofollow',
        },
      },
    ]),
  ],
})
export class HexagonsModule {}
