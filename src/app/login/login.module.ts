import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginMainComponent } from './login-main/login-main.component';
import { TmdbAuthComponent } from './tmdb-auth/tmdb-auth.component';
import { GuestAuthComponent } from './guest-auth/guest-auth.component';
import {MatInputModule} from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [LoginMainComponent, TmdbAuthComponent, GuestAuthComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatInputModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LoginModule { }
