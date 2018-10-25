import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../servicos/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isLogin: boolean;
  public nomeDeUsuario: string;
  public emailDeUsuario: string;
  constructor(
    public authService: AuthService) { }

  ngOnInit() {
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.nomeDeUsuario = auth.displayName;
        this.emailDeUsuario = auth.email;
      } else {
        this.isLogin = false;
      }
    });
  }

  onClickLogout() {
    this.authService.logout();
  }
}
