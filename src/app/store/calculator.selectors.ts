import { CalculatorState } from "./calculator.state";
import { createFeatureSelector, createSelector } from '@ngrx/store';

const selector = createFeatureSelector<CalculatorState>('calculator');

export const isLoaded = createSelector(
  selector, state => state && state.isLoaded
);

export const occupations = createSelector(
  selector, state => state && state.occupations
);

export const premiumAmount = createSelector(
  selector, state => state && state.premiumAmount
);