import { error } from '../../../../../../models/error';

interface IAuthState {
  accessToken: string;
  isLogin: boolean;
  error: error;
}

export default IAuthState;
