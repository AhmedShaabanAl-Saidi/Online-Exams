import { Observable } from "rxjs";
import { LoginResponse } from "../interfaces/ApiResponse/login-response";
import { RegisterResponse } from "../interfaces/ApiResponse/register-response";
import { LogoutResponse } from "../interfaces/ApiResponse/logout-response";
import { ForgotPasswordResponse } from "../interfaces/ApiResponse/forgot-password-response";
import { VerifyResetCodeResponse } from "../interfaces/ApiResponse/verify-reset-code-response";
import { ResetPasswordResponse } from "../interfaces/ApiResponse/reset-password-response";
import { ChangePasswordResponse } from "../interfaces/ApiResponse/change-password-response";
import { DeleteMyAccountResponse } from "../interfaces/ApiResponse/delete-my-account-response";
import { EditProfileResponse } from "../interfaces/ApiResponse/edit-profile-response";
import { LoginDto } from "../interfaces/DTOs/login-dto";
import { RegisterDto } from "../interfaces/DTOs/register-dto";
import { ForgotPasswordDto } from "../interfaces/DTOs/forgot-password-dto";
import { VerifyResetCodeDto } from "../interfaces/DTOs/verify-reset-code-dto";
import { ResetPasswordDto } from "../interfaces/DTOs/reset-password-dto";
import { ChangePasswordDto } from "../interfaces/DTOs/change-password-dto";
import { EditProfileDto } from "../interfaces/DTOs/edit-profile-dto";

export abstract class AuthAPI {
    abstract login(data: LoginDto): Observable<LoginResponse>;
    abstract register(data: RegisterDto): Observable<RegisterResponse>;
    abstract logout(): Observable<LogoutResponse>;
    abstract forgotPassword(data: ForgotPasswordDto): Observable<ForgotPasswordResponse>;
    abstract verifyResetCode(data: VerifyResetCodeDto): Observable<VerifyResetCodeResponse>;
    abstract resetPassword(data: ResetPasswordDto): Observable<ResetPasswordResponse>;
    abstract changePassword(data: ChangePasswordDto): Observable<ChangePasswordResponse>;
    abstract deleteMyAccount(): Observable<DeleteMyAccountResponse>;
    abstract editProfile(data: EditProfileDto): Observable<EditProfileResponse>;
}