import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlEventsComponent } from './control-events/control-events.component';
import { FormHttpComponent } from './form-http/form-http.component';
import { NgModelTwoWayComponent } from './ng-model-two-way/ng-model-two-way.component';
import { NgModelComponent } from './ng-model/ng-model.component';
import { ValidationStyleComponent } from './validation-style/validation-style.component';
import { ValidationSubmitingComponent } from './validation-submiting/validation-submiting.component';
import { ValidationsComponent } from './validations/validations.component';

const routes: Routes = [
  { path: 'ngmodel', component: NgModelComponent },
  { path: 'ngmodel-two-way', component: NgModelTwoWayComponent },
  { path: 'validations', component: ValidationsComponent },
  { path: 'validations-style', component: ValidationStyleComponent },
  { path: 'validations-submit', component: ValidationSubmitingComponent },
  { path: 'events', component: ControlEventsComponent },
  { path: 'form-http', component: FormHttpComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRoutingModule {}
