import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './components/default/pagenotfound/pagenotfound.component';
import { LoginComponent } from './components/default/login/login.component';
import { UserGuard } from './authentication/user.guard';
import { DefaultComponent } from './components/default/default/default.component';
import { UserlistComponent } from './components/user/userlist/userlist.component';
import { AdduserComponent } from './components/user/adduser/adduser.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
 
  {
    path: '',
    component: DefaultComponent,
    canActivate: [UserGuard],
    children: [
      {
        path: 'user',
        children: [
          { path: 'user', component: UserlistComponent },
          { path: 'about', component: AdduserComponent },
          { path: '', redirectTo: 'user', pathMatch: 'full' },
        ]
      },
    ]

  },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
