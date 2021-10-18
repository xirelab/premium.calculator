import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError, retry } from 'rxjs/operators';
import { InsuranceDetails } from "../models/insurance-details.model";
import { environment } from "../../environments/environment";
import { User } from "../models/user.model";

@Injectable({
    providedIn: 'root'
})
export class CalculatorService {
    constructor(private http: HttpClient){};

    getOccupations(user: User): Observable<any> {
        const url = `${environment.baseUrl}/occupations`;
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        });
        return this.http.get<any>(url, { headers: headers }).pipe(
            map(response => { 
                console.log(response);
                return response; 
            }),
            catchError((error: HttpErrorResponse) => {
              console.error(error);
              return throwError(error);
            })
          );
    }

    calculatePremium(insuranceDetails: InsuranceDetails, user: User): Observable<any> {
      const url = `${environment.baseUrl}/calculate`;
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      });
      console.log(insuranceDetails);
      return this.http.post<any>(url, insuranceDetails, { headers: headers }).pipe(
          map(response => { 
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
