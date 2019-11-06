import { AdminComponent } from './admin/admin.component';
import { ContentCreaterComponent } from './content-creater/content-creater.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DomainComponent } from './domain/domain.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      {
        path: 'admin', component: AdminComponent, children: [
          {
            path: 'domain',
            component: DomainComponent
          }]
      
      },
      {
        path: 'content-creater',
        component: ContentCreaterComponent,
        // children: [
        //   {
    
        //   }]
      },
     ]
    },
    // otherwise redirect to login
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
