import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginMainComponent } from './login-main/login-main.component';
import {RouterConstants} from '../core/constants/router.constants';
import { TmdbAuthComponent } from './tmdb-auth/tmdb-auth.component';
import { GuestAuthComponent } from './guest-auth/guest-auth.component';


const routes: Routes = [
  {
    path: RouterConstants.MAIN,
    component: LoginMainComponent,
    children: [
      {
        path: RouterConstants.MAIN,
        component: TmdbAuthComponent,
      },
      {
        path: RouterConstants.GUEST,
        component: GuestAuthComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
