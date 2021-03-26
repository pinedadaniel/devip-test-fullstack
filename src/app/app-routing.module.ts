import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RouterConstants} from './core/constants/router.constants';

const routes: Routes = [
  {
    path: RouterConstants.MAIN,
    loadChildren: () => import('../app/public/public.module').then(m => m.PublicModule)
  },
  {
    path: RouterConstants.LOGIN,
    loadChildren: () => import('../app/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: RouterConstants.MAIN,
    loadChildren: () => import('../app/private/private.module').then(m => m.PrivateModule)
  },
  {
    path: RouterConstants.AUTH,
    loadChildren: () => import('../app/login/login.module').then(m => m.LoginModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
