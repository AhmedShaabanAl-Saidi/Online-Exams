import { inject, Injectable } from '@angular/core';
import { AuthAPI } from './base/auth-api';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthEndPoint } from './enums/auth-endpoint';
import { AuthApiAdaptor } from './adaptor/auth-api-adaptor';

@Injectable({
  providedIn: 'root',
})
export class Auth implements AuthAPI {
  private _httpClient = inject(HttpClient);
  _authApiAdaptor = inject(AuthApiAdaptor);

  private handleError(err: any) {
    const errorMsg = err?.error?.message || 'Something went wrong';
    const errorCode = err?.error?.code || 500;
    return throwError(() => ({ message: errorMsg, code: errorCode }));
  }

  login(credentials: any): Observable<any> {
    return this._httpClient.post(AuthEndPoint.LOGIN, credentials)
      .pipe(
        catchError(err => this.handleError(err))
      );
  }

  register(userData: any): Observable<any> {
    return this._httpClient.post(AuthEndPoint.REGISTER, userData)
      .pipe(
        catchError(err => this.handleError(err))
      );
  }

  logout(): Observable<any> {
    return this._httpClient.get(AuthEndPoint.LOGOUT)
      .pipe(
        catchError(err => this.handleError(err))
      );
  }

  forgotPassword(email: string): Observable<any> {
    return this._httpClient.post(AuthEndPoint.FORGOTPASSWORD, { email })
      .pipe(
        catchError(err => this.handleError(err))
      );
  }

  verifyResetCode(code: string): Observable<any> {
    return this._httpClient.post(AuthEndPoint.VERIFYRESETCODE, { code })
      .pipe(
        catchError(err => this.handleError(err))
      );
  }

  resetPassword(code: string, newPassword: string): Observable<any> {
    return this._httpClient.put(AuthEndPoint.RESETPASSWORD, { code, newPassword })
      .pipe(
        catchError(err => this.handleError(err))
      );
  }

  changePassword(current: string, newPassword: string): Observable<any> {
    return this._httpClient.put(AuthEndPoint.CHANGEPASSWORD, { current, newPassword })
      .pipe(
        catchError(err => this.handleError(err))
      );
  }

  deleteMyAccount(): Observable<any> {
    return this._httpClient.get(AuthEndPoint.DELETEMYACCOUNT)
      .pipe(
        catchError(err => this.handleError(err))
      );
  }

  editProfile(data: any): Observable<any> {
    return this._httpClient.post(AuthEndPoint.EDITPROFILE, data)
      .pipe(
        catchError(err => this.handleError(err))
      );
  }
}