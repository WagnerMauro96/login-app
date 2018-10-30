import { FlashMessagesService } from 'angular2-flash-messages';
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
    public router: Router,
    public mensagemFlash: FlashMessagesService
  ) { }

  onSubmitAddUser() {
    this.authService.registerUser(this.email, this.password)
    .then((res) => {
      this.mensagemFlash.show('Usuario criado com sucesso!',
      {cssClass: 'alert alert-dismissible alert-success', timeout: 4000});
      this.router.navigate(['/privado']);
    }).catch((err) => {
      this.mensagemFlash.show(err.message,
      {cssClass: 'alert alert-dismissible alert-danger', timeout: 4000});
      console.log(err);
    });
  }

  ngOnInit() {
  }

}
