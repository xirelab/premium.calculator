import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { CalculatorService } from "../services/calculator.service";
import { CalculatorActionTypes } from "./calculator.actions";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AppState } from "./calculator.state";
import * as actions from "./calculator.actions";
import { catchError, map, mergeMap, withLatestFrom } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class CalculatorEffects {
  constructor(
    private CalculatorService: CalculatorService, 
    private action$: Actions,
    private store$: Store<AppState>
  ) {}

  prepareSystemCalculator$ = createEffect(() =>
    this. action$.pipe(
      ofType(CalculatorActionTypes.LoadOccupations),      
      mergeMap(() => {
        return this.CalculatorService.getOccupations()
          .pipe(
            map(data => actions.LoadOccupationsCompleted({response: data}))
          );       
      })      
    )
  );

  calculatePremium$ = createEffect(() =>
    this. action$.pipe(
      ofType(CalculatorActionTypes.CalculatePremium),      
      withLatestFrom(this.store$),
      mergeMap(([insuranceDetails, state]) => {
        return this.CalculatorService.calculatePremium(insuranceDetails)
          .pipe(            
            map(data => actions.CalculatePremiumCompleted({response: data})),
            catchError(error => {
              return of(actions.CalculatePremiumErrored({errorDetails: error}));
            })
          );       
      })      
    )
  );
}
