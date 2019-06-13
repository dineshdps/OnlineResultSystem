import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { CreateStructComponent } from './create-struct/create-struct.component';
import { CreateResultComponent } from './create-result/create-result.component';
import { ResultComponent } from './result/result.component';
import { CreatedFormatComponent } from './created-format/created-format.component';

import { SubjectComponent } from './subject/subject.component';
import { HelpComponent } from './help/help.component';

import { ViewSubjectsComponent } from './view-subjects/view-subjects.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { DownloadResultComponent } from './download-result/download-result.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'nav', component: MainNavComponent },
  { path: 'create-struct', component: CreateStructComponent },
  { path: 'create-result', component: CreateResultComponent },
  { path: 'result', component: ResultComponent },
  { path: 'format', component: CreatedFormatComponent },
  { path: 'subjects', component: SubjectComponent },
  { path: 'help', component: HelpComponent },
  { path: 'view-subject', component: ViewSubjectsComponent },
  // { path:'add-admin/:finalUsername/:finalPassword',component:AddAdminComponent}
  { path: 'forget-password', component: ForgetpasswordComponent },
  { path: 'download-result', component: DownloadResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
