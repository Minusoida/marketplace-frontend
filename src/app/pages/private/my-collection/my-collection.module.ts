import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MyCollectionPage } from './my-collection.page';
@NgModule({
  declarations: [MyCollectionPage],
  imports: [
    CommonModule,
    IvyCarouselModule,
    RouterModule.forChild([
      {
        path: '',
        component: MyCollectionPage,
        data: {
          title: 'MyCollectionPage',
          robots: 'noindex, nofollow',
        },
      },
    ]),
  ],
  exports: [IvyCarouselModule]
})
export class MyCollectionModule {}
