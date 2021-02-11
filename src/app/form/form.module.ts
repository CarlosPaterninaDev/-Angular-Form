import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRoutingModule } from './form-routing.module';
import { NgModelComponent } from './ng-model/ng-model.component';
import { FormsModule } from '@angular/forms';
import { NgModelTwoWayComponent } from './ng-model-two-way/ng-model-two-way.component';
import { ValidationsComponent } from './validations/validations.component';
import { ValidationStyleComponent } from './validation-style/validation-style.component';
import { ValidationSubmitingComponent } from './validation-submiting/validation-submiting.component';
import { ControlEventsComponent } from './control-events/control-events.component';
import { FormHttpComponent } from './form-http/form-http.component';

@NgModule({
  declarations: [
    NgModelComponent,
    NgModelTwoWayComponent,
    ValidationsComponent,
    ValidationStyleComponent,
    ValidationSubmitingComponent,
    ControlEventsComponent,
    FormHttpComponent,
  ],
  imports: [CommonModule, FormRoutingModule, FormsModule],
})
export class FormModule {}
