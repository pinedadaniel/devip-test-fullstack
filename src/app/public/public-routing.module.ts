import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RouterConstants} from '../core/constants/router.constants';
import { HomeComponent } from './home/home.component';
import { PublicMainComponent } from './public-main/public-main.component';
import { SplashComponent } from './splash/splash.component';

const routes: Routes = [
  {
    path: RouterConstants.MAIN,
    component: PublicMainComponent,
    children: [
      {
        path: RouterConstants.MAIN,
        component: SplashComponent
      },
      {
        path: RouterConstants.HOME,
        component: HomeComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
