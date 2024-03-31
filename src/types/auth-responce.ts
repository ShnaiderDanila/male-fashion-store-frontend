import { TUser } from './entities/user-entity';

export type TAuthResponce = {
  user: TUser;
  token: string;
};
