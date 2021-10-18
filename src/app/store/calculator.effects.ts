import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { CalculatorService } from "../services/calculator.service";
import { CalculatorActionTypes } from "./calculator.actions";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AppState } from "./calculator.state";
import * as actions from "./calculator.actions";
import { catchError, map, mergeMap, withLatestFrom } from "rxjs/operators";
import { of } from "rxjs";
import { LoginService } from "../services/login.services";

@Injectable()
export class CalculatorEffects {
  constructor(
    private CalculatorService: CalculatorService, 
    private loginService: LoginService,
    private action$: Actions,
    private store$: Store<AppState>
  ) {}

  loginUser$ = createEffect(() =>
    this. action$.pipe(
      ofType(CalculatorActionTypes.LoginUser),      
      withLatestFrom(this.store$),
      mergeMap(([user, state]) => {
        return this.loginService.login(user)
          .pipe(            
            map(data => actions.LoginUserCompleted({response: data})),
            catchError(error => {
              return of(actions.LoginUserFailed({errorDetails: error}));
            })
          );       
      })      
    )
  );

  prepareSystemCalculator$ = createEffect(() =>
    this. action$.pipe(
      ofType(CalculatorActionTypes.LoadOccupations),
      withLatestFrom(this.store$),
      mergeMap(([, state]) => {
        if (state && state.calculator && state.calculator.user) {
          return this.CalculatorService.getOccupations(state.calculator.user)
          .pipe(
            map(data => actions.LoadOccupationsCompleted({response: data}))
          ); 
        } else {
          return of(actions.LoginUserFailed);
        }
      })      
    )
  );

  calculatePremium$ = createEffect(() =>
    this. action$.pipe(
      ofType(CalculatorActionTypes.CalculatePremium),      
      withLatestFrom(this.store$),
      mergeMap(([insuranceDetails, state]) => {
        if (state && state.calculator && state.calculator.user) {
          return this.CalculatorService.calculatePremium(insuranceDetails, state.calculator.user)
          .pipe(            
            map(data => actions.CalculatePremiumCompleted({response: data})),
            catchError(error => {
              return of(actions.CalculatePremiumErrored({errorDetails: error}));
            })
          );   
        } else {
          return of(actions.LoginUserFailed);
        }            
      })      
    )
  );
}
