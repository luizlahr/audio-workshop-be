import * as bcrypt from 'bcrypt';

const SALT = 1;

export const hash = (text: string) => {
  return bcrypt.hashSync(text, SALT);
};
