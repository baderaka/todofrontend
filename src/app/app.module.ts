import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { RegisterComponent } from './register/register.component';
import { NewuserComponent } from './newuser/newuser.component';
import { EditComponent } from './edit/edit.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy,LocationStrategy } from '@angular/common';
import { TodoInterceptor } from './todo.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    RegisterComponent,
    NewuserComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
    
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TodoInterceptor,multi:true},{provide:LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
