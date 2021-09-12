import { error } from 'src/models/error';

interface ISignInState {
  id: string;
  password: string;
  error: error;
}

export default ISignInState;
