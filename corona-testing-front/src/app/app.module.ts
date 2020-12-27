import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { FormInputComponent } from './views/form-input/form-input.component';
import { FormSubmittedComponent } from './views/form-submitted/form-submitted.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FormInputComponent,
    FormSubmittedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
