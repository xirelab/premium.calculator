import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { CalculatorState } from 'src/app/store/calculator.state';
import * as actions from '../../../store/calculator.actions';
import * as selector from '../../../store/calculator.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginStatus$ = this.store.pipe(select(selector.loginStatus));
  
  username: string = '';
  password: string = '';

  constructor(
    private store: Store<CalculatorState>,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.loginStatus$.subscribe((status: string) => {
      if(status === 'success') {
        this.router.navigate(['calculator']);
      } 
    });
  }

  get isReady() {
    return this.username && this.password;
  }

  keyPress(event: any) {    
    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode === 13) {
      this.login();
    }    
  }

  login() {
    if (this.username && this.password) {
      this.store.dispatch(actions.LoginUser({'username': this.username, "password": this.password}));
    }
    
  }

}
