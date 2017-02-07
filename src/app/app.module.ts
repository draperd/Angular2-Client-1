import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';
import { UserService } from './user.service';
import { routes } from './app.routes';
import { LoggedInGuard } from './logged-in.guard';
import { List } from './list.component';
import { ListView } from "./listview.component";
import { Toolbar } from "./toolbar.component";
import { Breadcrumb } from "./breadcrumb.component";
import { Base } from "./base.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    List,
    ListView,
    Toolbar,
    Breadcrumb
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [UserService, LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
