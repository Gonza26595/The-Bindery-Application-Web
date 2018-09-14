import { catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { HttpErrorResponse, HttpClient } from "@angular/common/http";
import { Observable, throwError} from "rxjs";



@Injectable()
export class BaseService {
  constructor(private http: HttpClient) {}

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      return throwError(error.status);
    };
  }

  protected get(url: string): Observable<any> {
    return this.http.get<any[]>(url).pipe(catchError(this.handleError()));
  }

  protected getById(url: string, id: any) {
    return this.http
      .get<any[]>(url + "/" + id)
      .pipe(catchError(this.handleError()));
  }

  protected put(url: string, data: object, options: object) {
    return this.http
      .put(url, JSON.stringify(data), options)
      .pipe(catchError(this.handleError()));
  }

  protected post(url: string, data: object, options: object): Observable<any> {
    return this.http
      .post(url, JSON.stringify(data), options)
      .pipe(catchError(this.handleError()));
  }

  protected postFiles(url: string, data: object, options?: object): Observable<any> {
    return this.http
      .post(url, data, options)
      .pipe(catchError(this.handleError()));
  }

  protected delete(url: string) {
    // return this.http.get<any[]>(url)
    // .pipe(catchError(this.handleError()));
  }
}
