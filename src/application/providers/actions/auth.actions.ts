import { Login } from '@domain/auth/actions/login.action';
import { ValidateUser } from '@domain/auth/actions/validate-user.action';

export const authActions = [ValidateUser, Login];
