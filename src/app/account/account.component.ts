import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }
  
  user: boolean= false;
  users: any;
  account: string= localStorage.getItem('isLogin');
  
  ngOnInit() {
    if(localStorage.getItem('isLogin')==null){
      this.user=true;
    }
    else{
      this.http.get('./../../assets/accounts.json').subscribe((response) => {
        this.users = response;
      })
    }
  }
  logout(){
    localStorage.removeItem('isLogin');
    location.reload();
    this.router.navigate(['/register-login']);
  }

}
