import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { CreateStructComponent } from './create-struct/create-struct.component';
import { CreateResultComponent } from './create-result/create-result.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultComponent } from './result/result.component';
import { CreatedFormatComponent } from './created-format/created-format.component';
import { HttpModule } from '@angular/http';

import { SubjectComponent } from './subject/subject.component';
import { DialogComponent } from './dialog/dialog.component';
import { HelpComponent } from './help/help.component';

import { ViewSubjectsComponent } from './view-subjects/view-subjects.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { DownloadResultComponent } from './download-result/download-result.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainNavComponent,
    CreateStructComponent,
    CreateResultComponent,
    ResultComponent,
    CreatedFormatComponent,
    SubjectComponent,
    DialogComponent,
    HelpComponent,
    ViewSubjectsComponent,
    ForgetpasswordComponent,
    DownloadResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, MaterialModule, LayoutModule, MatToolbarModule,
    MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, FormsModule, ReactiveFormsModule, HttpModule,HttpClientModule
  ],
  entryComponents: [
    DialogComponent
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
