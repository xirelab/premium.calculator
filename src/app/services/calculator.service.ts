import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Occupation } from "../models/occupation.model";
import { Observable, throwError } from "rxjs";
import { map, catchError, retry } from 'rxjs/operators';
import { InsuranceDetails } from "../models/insurance-details.model";

@Injectable({
    providedIn: 'root'
})
export class CalculatorService {
    constructor(private http: HttpClient){};

    getOccupations(): Observable<any> {
        // const url = "https://localhost:44309/api/calculator/occupations";
        const url = "api/occupations";  // TODO
        return this.http.get<any>(url).pipe(
            // map(response => { 
            //     console.error("my response");
            //     console.error(response);
            //     return response; 
            // }),
            retry(2),  // TODO
            catchError((error: HttpErrorResponse) => {
              console.error(error);
              return throwError(error);
            })
          );
    }

    calculatePremium(insuranceDetails: InsuranceDetails): Observable<any> {
      const url = "https://localhost:44309/api/calculator/occupations";
      console.log("my payload");
      console.log(insuranceDetails);
      // const payload = insuranceDetails.

      return this.http.post<any>(url, insuranceDetails).pipe(
          map(response => { 
              console.log("my response");
              console.log(response);
              return response; 
          }),
          catchError((error: HttpErrorResponse) => {
            console.error(error);
            return throwError(error);
          })
        );
  }
}
