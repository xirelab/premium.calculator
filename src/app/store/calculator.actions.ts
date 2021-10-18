import { createAction, props } from '@ngrx/store';
import { InsuranceDetails } from '../models/insurance-details.model';
import { Occupation } from '../models/occupation.model';

export enum CalculatorActionTypes {
  LoadOccupations = '[Calculator] Load Occupations',
  LoadOccupationsCompleted = '[Calculator] Load Occupations Completed',
  CalculatePremium = '[Calculator] Calculate Premium',
  CalculatePremiumCompleted = '[Calculator] Calculate Premium Completed',
  ClearInsuranceDetails = '[Calculator] Clear Insurance Details',
}

export const LoadOccupations = createAction(CalculatorActionTypes.LoadOccupations);

export const LoadOccupationsCompleted = createAction(
  CalculatorActionTypes.LoadOccupationsCompleted,
  props<{ response: any }>()
);

export const CalculatePremium = createAction(
  CalculatorActionTypes.CalculatePremium,
  (payload: InsuranceDetails) => payload
);

export const CalculatePremiumCompleted = createAction(
  CalculatorActionTypes.CalculatePremiumCompleted,
  props<{ response: any }>()
);

export const ClearInsuranceDetails = createAction(CalculatorActionTypes.ClearInsuranceDetails);