import { CheckUser } from '@domain/auth/actions/check-user.action';
import { SignIn } from '@domain/auth/actions/sign-in.action';
import { ValidateUser } from '@domain/auth/actions/validate-user.action';

export const authActions = [ValidateUser, SignIn, CheckUser];
