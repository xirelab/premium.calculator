import { ValueTransformer } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { InsuranceDetails } from 'src/app/models/insurance-details.model';
import { Occupation } from 'src/app/models/occupation.model';
import { CalculatorService } from 'src/app/services/calculator.service';
import { CalculatorState } from 'src/app/store/calculator.state';
import * as actions from '../../store/calculator.actions';
import * as selector from '../../store/calculator.selectors';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  isLoaded$ = this.store.pipe(select(selector.isLoaded));
  occupations$ = this.store.pipe(select(selector.occupations));
  premiumAmount$ = this.store.pipe(select(selector.premiumAmount));

  insuranceDetails = new InsuranceDetails();
  canClear: boolean = false;

  constructor(
    private store: Store<CalculatorState>,
    private actions$: Actions
  ) {}

  ngOnInit(): void {
    this.store.dispatch(actions.LoadOccupations());
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
  }
  
  cleared() {
    this.canClear = false;
  }

}