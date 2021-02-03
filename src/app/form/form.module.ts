import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRoutingModule } from './form-routing.module';
import { NgModelComponent } from './ng-model/ng-model.component';
import { FormsModule } from '@angular/forms';
import { NgModelTwoWayComponent } from './ng-model-two-way/ng-model-two-way.component';


@NgModule({
  declarations: [NgModelComponent, NgModelTwoWayComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule
  ]
})
export class FormModule { }
