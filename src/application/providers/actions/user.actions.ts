import { CreateUser } from '@domain/user/actions/create-user.action';
import { ListUsers } from '@domain/user/actions/list-users.action';
import { ReadUser } from '@domain/user/actions/read-user.action';

export const userActions = [CreateUser, ReadUser, ListUsers];
