import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  validateLogin() {
    this.AuthService.getUserId(this.username, this.password).subscribe(
      (data: {userId: any, token: any}) => {
        console.log('--->', data);
        this.router.navigate([`$(data.userId)`]);
      }, error => console.log('ERROR', error);
    );
  }
}
