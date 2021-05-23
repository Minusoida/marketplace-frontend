import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TriglavPage } from './triglav.page';

@NgModule({
  declarations: [TriglavPage],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TriglavPage,
        data: {
          title: 'Triglav',
          robots: 'noindex, nofollow',
        },
      },
    ]),
  ],
})
export class TriglavModule {}
