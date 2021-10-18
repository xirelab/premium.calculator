import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Occupation } from "../models/occupation.model";
import { Observable, throwError } from "rxjs";
import { map, catchError, retry } from 'rxjs/operators';
import { InsuranceDetails } from "../models/insurance-details.model";
import { environment } from "../../environments/environment";
import { User } from "../models/user.model";

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    constructor(private http: HttpClient){};

    login(user: any): Observable<any> {
      const url = `${environment.baseUrl}/authenticate`;
      console.log("my payload");
      console.log(user);
      return this.http.post<any>(url, user).pipe(
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
