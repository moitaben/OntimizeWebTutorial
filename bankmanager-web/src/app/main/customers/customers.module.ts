  import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
  import {OntimizeWebModule} from "ontimize-web-ngx";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    OntimizeWebModule
  ]
})
export class CustomersModule { }
