import { IFlag } from './IFlag';

export interface IUser{
  _id: string;
  name: string,
  email: string;
  imageUrl: string;
  googleId: string;
  flags: Array<IFlag>;
  updatedAt?: string;
}