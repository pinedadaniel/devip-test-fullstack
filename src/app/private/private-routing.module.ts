import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExplorerComponent } from './explorer/explorer.component';
import {RouterConstants} from '../core/constants/router.constants';
import { PrivateMainComponent } from './private-main/private-main.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: RouterConstants.MAIN,
    component: PrivateMainComponent,
    children: [
      {
        path: RouterConstants.EXPLORER,
        component: ExplorerComponent
      },
      {
        path: RouterConstants.DETAILS,
        component: DetailsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
