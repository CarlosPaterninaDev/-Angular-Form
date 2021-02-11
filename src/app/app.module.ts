import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormModule } from './form/form.module';
import { AppRoutingModule } from './app-routing-routing.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, FormModule, AppRoutingModule, HttpClientModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
