import { Observable } from "rxjs";

export abstract class AuthAPI {
    abstract login(credentials: any): Observable<any>;
    abstract register(userData: any): Observable<any>;
    abstract logout(): Observable<any>;
    abstract forgotPassword(email: string): Observable<any>;
    abstract verifyResetCode(code: string): Observable<any>;
    abstract resetPassword(code: string, newPassword: string): Observable<any>;
    abstract changePassword(current: string, newPassword: string): Observable<any>;
    abstract deleteMyAccount(): Observable<any>;
    abstract editProfile(data: any): Observable<any>;
}