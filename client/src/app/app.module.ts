import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AgGridModule} from 'ag-grid-angular/main';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { EntriesComponent } from './components/entries/entries.component';
import { ShowEntriesComponent } from './components/entries/showentries.component';
import { AuthService } from './services/auth.service';
import { EntriesService } from './services/entries.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    EntriesComponent,
    ShowEntriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
      AgGridModule.withComponents(
          [ShowEntriesComponent]
      )
  ],
  providers: [AuthService,EntriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
