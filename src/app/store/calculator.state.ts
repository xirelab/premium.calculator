import { InsuranceDetails } from "../models/insurance-details.model";
import { Occupation } from "../models/occupation.model";

export interface CalculatorState {
    isLoaded: boolean;
    occupations: Array<Occupation>;
    premiumAmount: number;
    errorMessage: string;
}

export class AppState {
    calculator: CalculatorState | undefined;
}