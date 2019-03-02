import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResourceLoader } from '@angular/compiler';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.scss']
})
export class RegisterLoginComponent implements OnInit {

  username: string;
  password: string;
  wrongInput: boolean= true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogin(){
    if(this.username!= null && this.password!= null){
      if((this.username== 'user' || this.username== 'user@example.com') && this.password== 'user'){
        localStorage.setItem('isLogin', this.username);
        location.reload();
        this.router.navigateByUrl('/account');
      }
      else{
        this.wrongInput= false;
      }
    }
    else{
      this.wrongInput= false;
    }
  }
}
