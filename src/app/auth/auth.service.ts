import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IResponse } from '../core/interface/response.interface';
import { ILoginResponse } from './auth.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  login(payload: {
    email: string;
    password: string;
  }): Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>(
      'https://dummyjson.com/auth/login',
      payload
    );
  }
}
