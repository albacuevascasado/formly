import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { UserComponent } from './components/user/user.component';
import { emailValidationMessage, minValidationMessage } from './validation/validation_messages';
import { EmailValidator } from './validation/validators';
import { JsonPruebaComponent } from './components/json-prueba/json-prueba.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    JsonPruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({ 
      extras: { lazyRender: true },
      validationMessages: [
        { name: 'required', message: 'This field is required' }, 
        { name: 'min', message: minValidationMessage },
        //{ name: 'email', message: emailValidationMessage}
      ] }),
    FormlyBootstrapModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
