import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonService } from './services/common.service';
import { LoaderService } from './services/loader.service';
import { TokenService } from './services/token.service';
import { LoaderComponent } from './components/common/loader/loader.component';


import { LoginComponent } from './components/default/login/login.component';
import { DefaultComponent } from './components/default/default/default.component';
import { DashboardComponent } from './components/user/dashboard/dashboard.component';
import { UserlistComponent } from './components/user/userlist/userlist.component';
import { AdduserComponent } from './components/user/adduser/adduser.component';
import { CommonModule,DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/common/header/header.component';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    LoginComponent,
    DefaultComponent,
    DashboardComponent,
    UserlistComponent,
    AdduserComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [CommonService,
    LoaderService,DatePipe,
    TokenService,BsDatepickerConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
