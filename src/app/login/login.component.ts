import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserRoleService } from '../core/services/user-role.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  constructor(
    public userRoleService: UserRoleService,
    private router: Router
  ) { }

  onLogin(): void {
    this.router.navigate(['/admin']);
    this.userRoleService.login();
  }
 
  onLogout() {
    this.router.navigate(['/products-list']);
    this.userRoleService.logout();
  }
}
