import { createAction, props } from '@ngrx/store';
import { InsuranceDetails } from '../models/insurance-details.model';
import { User } from '../models/user.model';

export enum CalculatorActionTypes {
  LoginUser = '[Calculator] Login User',
  LoginUserCompleted = '[Calculator] Login User Completed',
  LoginUserFailed = '[Calculator] Login User Failed',
  LoadOccupations = '[Calculator] Load Occupations',
  LoadOccupationsCompleted = '[Calculator] Load Occupations Completed',
  CalculatePremium = '[Calculator] Calculate Premium',
  CalculatePremiumCompleted = '[Calculator] Calculate Premium Completed',
  CalculatePremiumErrored = '[Calculator] Calculate Premium Errored',
  ClearInsuranceDetails = '[Calculator] Clear Insurance Details',
  LogoutUser = '[Calculator] Logou tUser'
}

export const LoginUser = createAction(
  CalculatorActionTypes.LoginUser,
  (payload: any) => payload
);

export const LoginUserCompleted = createAction(
  CalculatorActionTypes.LoginUserCompleted,
  props<{ response: any }>()
);

export const LoginUserFailed = createAction(
  CalculatorActionTypes.LoginUserFailed,
  props<{ errorDetails: any }>()
);

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

export const CalculatePremiumErrored = createAction(
  CalculatorActionTypes.CalculatePremiumErrored,
  props<{ errorDetails: any }>()
);

export const ClearInsuranceDetails = createAction(CalculatorActionTypes.ClearInsuranceDetails);

export const LogoutUser = createAction(CalculatorActionTypes.LogoutUser);