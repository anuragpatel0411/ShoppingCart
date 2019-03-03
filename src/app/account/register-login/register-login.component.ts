import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResourceLoader } from '@angular/compiler';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { HttpClient } from '@angular/common/http';
import { findReadVarNames } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.scss']
})
export class RegisterLoginComponent implements OnInit {

  username: string;
  password: string;
  user: any;
  wrongInput: boolean= true;

  constructor(private router: Router,private http: HttpClient) { }

  ngOnInit() {
    this.http.get('./../../assets/accounts.json').subscribe((response) => {
      this.user = response;
    })
  }

  onLogin(){
    if(this.username!= null && this.password!= null){
      for(let i=0; i < this.user.length; i++){
        if((this.username== this.user[i].username || this.username== this.user[i].email) && this.password== this.user[i].password){
          localStorage.setItem('isLogin', this.username);
          location.reload();
          this.router.navigateByUrl('/account');
        }
        else{
          this.wrongInput= false;
        }
      }
    }
    else{
      this.wrongInput= false;
    }
  }
}
