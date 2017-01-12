import { LoginComponent } from './login.component';
import { HomeComponent } from './home.component';
import { LoggedInGuard } from './logged-in.guard';

export const routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [LoggedInGuard] }
];