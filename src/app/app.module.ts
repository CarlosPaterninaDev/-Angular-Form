import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormModule } from './form/form.module';
import { AppRoutingModule } from './app-routing-routing.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, FormModule, AppRoutingModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
