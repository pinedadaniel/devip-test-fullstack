import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { ExplorerComponent } from './explorer/explorer.component';
import { PrivateMainComponent } from './private-main/private-main.component';
import {A11yModule} from '@angular/cdk/a11y';
import {MatCardModule} from '@angular/material/card';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import {CdkTableModule} from "@angular/cdk/table";

@NgModule({
  declarations: [ExplorerComponent, PrivateMainComponent, DetailsComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    NgxPaginationModule,
    A11yModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    CdkTableModule,
  ]
})
export class PrivateModule { }
