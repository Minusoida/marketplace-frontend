import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TokenPage } from './token.page';

@NgModule({
  declarations: [TokenPage],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TokenPage,
        data: {
          title: 'Token',
          robots: 'noindex, nofollow',
        },
      },
    ]),
  ],
})
export class TokenModule {}
