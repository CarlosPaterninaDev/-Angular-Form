import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgModelTwoWayComponent } from './ng-model-two-way/ng-model-two-way.component';
import { NgModelComponent } from './ng-model/ng-model.component';

const routes: Routes = [
  {path: 'ngmodel', component: NgModelComponent},
  {path: 'ngmodel-two-way', component: NgModelTwoWayComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
