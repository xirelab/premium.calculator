import { CalculatorState } from "./calculator.state";
import { createFeatureSelector, createSelector } from '@ngrx/store';

const selector = createFeatureSelector<CalculatorState>('calculator');

export const isLoaded = createSelector(
  selector, state => state && state.isLoaded
);

export const loginStatus = createSelector(
  selector, state => state && state.loginStatus
);

export const user = createSelector(
  selector, state => state && state.user
);

export const occupations = createSelector(
  selector, state => state && state.occupations
);

export const premiumAmount = createSelector(
  selector, state => state && state.premiumAmount
);

export const errorMessage = createSelector(
  selector, state => state && state.errorMessage
);