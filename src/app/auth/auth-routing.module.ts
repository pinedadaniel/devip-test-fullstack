import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RouterConstants} from '../core/constants/router.constants';
import { AuthMainComponent } from './auth-main/auth-main.component';
import { GuestComponent } from './guest/guest.component';
import { TmdbComponent } from './tmdb/tmdb.component';

const routes: Routes = [
  {
    path: RouterConstants.MAIN,
    component: AuthMainComponent,
    children: [
      {
        path: RouterConstants.MAIN,
        component: GuestComponent,
      },
      {
        path: RouterConstants.AUTH,
        component: TmdbComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
