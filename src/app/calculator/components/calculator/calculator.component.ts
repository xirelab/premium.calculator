import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { InsuranceDetails } from 'src/app/models/insurance-details.model';
import { Occupation } from 'src/app/models/occupation.model';
import { CalculatorService } from 'src/app/services/calculator.service';
import { CalculatorState } from 'src/app/store/calculator.state';
import * as actions from '../../../store/calculator.actions';
import * as selector from '../../../store/calculator.selectors';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  isLoaded$ = this.store.pipe(select(selector.isLoaded));
  loginStatus$ = this.store.pipe(select(selector.loginStatus));
  user$ = this.store.pipe(select(selector.user));
  occupations$ = this.store.pipe(select(selector.occupations));
  premiumAmount$ = this.store.pipe(select(selector.premiumAmount));
  errorMessage$ = this.store.pipe(select(selector.errorMessage));

  insuranceDetails = new InsuranceDetails();
  canClear: boolean = false;

  constructor(
    private store: Store<CalculatorState>,
    private actions$: Actions,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.store.dispatch(actions.LoadOccupations());

    this.loginStatus$.subscribe((status: string) => {
      if(status === '' || status === 'logout') {
        this.router.navigate(['']);
      } 
    });
  }

  get isReady() {
    return this.insuranceDetails.age && 
           this.insuranceDetails.occupationId &&
           this.insuranceDetails.deathCoverAmount;
  }

  selectOccupation(id: number) {
    this.insuranceDetails.occupationId = id;
  }

  calculate() {
    this.store.dispatch(actions.CalculatePremium(this.insuranceDetails));
  }

  clear() {
    this.insuranceDetails = new InsuranceDetails();
    this.canClear = true;
    this.store.dispatch(actions.ClearInsuranceDetails());
  }
  
  cleared() {
    this.canClear = false;
  }

  logOut() {
    this.store.dispatch(actions.LogoutUser());
  }

}
