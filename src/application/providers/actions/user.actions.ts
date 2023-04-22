import { CreateUser } from '@domain/user/actions/create-user.action';
import { ReadUser } from '@domain/user/actions/read-user.action';

export const userActions = [CreateUser, ReadUser];
