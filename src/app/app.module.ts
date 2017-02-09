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
import { List } from './containers/list.component';
import { ListView } from "./views/listview.component";
import { Toolbar } from "./toolbar.component";
import { Breadcrumb } from "./breadcrumb.component";
import { Base } from "./base.component";

import { TableView } from "./mdl/views/tableview.component";
import { TableCell } from "./mdl/views/tablecell.component";
import { TableHeading } from "./mdl/views/tableheading.component";

import { Layout } from "./mdl/layouts/layout.component";

import { MdlUpgrade } from "./mdl/upgrade.directive";

import { LogoutButton} from "./mdl/buttons/logout.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    List,
    ListView,
    Toolbar,
    Breadcrumb,
    TableView,
    TableCell,
    TableHeading,
    Layout,
    LogoutButton,
    MdlUpgrade
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
