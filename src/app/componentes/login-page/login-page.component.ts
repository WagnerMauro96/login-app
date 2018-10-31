import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../servicos/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public email: string;
  public password: string;
  constructor(
    public authService: AuthService,
    public router: Router,
    public mensagemFlash: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitLogin() {
    this.authService.loginEmail(this.email, this.password)
    .then((res) => {
      this.mensagemFlash.show('Usuario logado com sucesso!',
      {cssClass: 'alert alert-dismissible alert-success', timeout: 4000});
      this.router.navigate(['/privado']);
    }).catch((err) => {
      this.mensagemFlash.show(err.message,
        {cssClass: 'alert alert-dismissible alert-danger', timeout: 4000});
      console.log(err);
      this.router.navigate(['/login']);
    });
  }

  onClickGoogleLogin() {
    this.authService.loginGoogle()
    .then((res) => {
      this.router.navigate(['/privado']);
    }).catch(err => console.log(err.message));
  }
  onClickFacebookLogin() {
    this.authService.loginFacebook().then((res) => {
      this.router.navigate(['/privado']);
    }).catch(err => console.log(err.message));
  }
  onClickTwitterLogin() {
    this.authService.loginTwitter().then((res) => {
      this.router.navigate(['/privado']);
    }).catch(err => console.log(err.message));
  }

}
