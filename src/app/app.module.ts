import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterAccountComponent } from './register-account/register-account.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SingleUserDetailsComponent } from './single-user-details/single-user-details.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { EditDetailsComponent } from './users-details/edit-details/edit-details.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterAccountComponent,
    HomePageComponent,
    SingleUserDetailsComponent,
    UsersDetailsComponent,
    EditDetailsComponent,
    AboutComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
