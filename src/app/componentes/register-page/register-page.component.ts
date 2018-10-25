import { AuthService } from './../../servicos/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  public email: string;
  public password: string;
  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  onSubmitAddUser() {
    this.authService.registerUser(String(this.email), String(this.password))
    .then((res) => {
      this.router.navigate(['/privado']);
    }).catch((err) => {
      console.log(err);
    });
  }

  ngOnInit() {
  }

}
