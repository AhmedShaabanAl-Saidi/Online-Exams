import { inject, Injectable } from '@angular/core';
import { AuthAPI } from './base/auth-api';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthEndPoint } from './enums/auth-endpoint';
import { AuthApiAdaptor } from './adaptor/auth-api-adaptor';

@Injectable({
  providedIn: 'root',
})
export class Auth implements AuthAPI {
  private _httpClient = inject(HttpClient);
  _authApiAdaptor = inject(AuthApiAdaptor);

  login(credentials: any): Observable<any> {
    return this._httpClient.post(AuthEndPoint.LOGIN, credentials)
      .pipe(map(res => this._authApiAdaptor.adapt(res)),
        catchError(err => of(err))
      );
  }

}
