import { InsuranceDetails } from "../models/insurance-details.model";
import { Occupation } from "../models/occupation.model";
import { User } from "../models/user.model";

export interface CalculatorState {
    isLoaded: boolean;
    user: User;
    loginStatus: string,
    occupations: Array<Occupation>;
    premiumAmount: number;
    errorMessage: string;
}

export class AppState {
    calculator: CalculatorState | undefined;
}