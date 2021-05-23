import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyCollectionPage } from './my-collection.page';

@NgModule({
  declarations: [MyCollectionPage],
  imports: [
    CommonModule,
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
})
export class MyCollectionModule {}
