import { createReducer, on } from '@ngrx/store';
import { CalculatorState } from './calculator.state';
import * as action from './calculator.actions';
import { InsuranceDetails } from '../models/insurance-details.model';

const initialState: CalculatorState = {    
    isLoaded: true,
    occupations: [],
    premiumAmount: 0
};

export const CalculatorReducer = createReducer(
    initialState,

    on(action.LoadOccupations, state => ({ ...state, isLoaded: false })),
 
    on(action.LoadOccupationsCompleted, (state, { response }) => {
        // state.occupations = response && response.data ? response.data : [];
        state.occupations = response ? response : [];  // TODO
        return {            
            ...state,
            isLoaded: true,
        }
    }),

    on(action.CalculatePremium, state => ({ ...state, isLoaded: false })),
 
    on(action.CalculatePremiumCompleted, (state, { response }) => {
        // state.premiumAmount = response && response.data ? response.data : [];
        state.premiumAmount = response ? response : [];  // TODO
        return {            
            ...state,
            isLoaded: true,
        }
    })
);
