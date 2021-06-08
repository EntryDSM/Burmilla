import { takeLatest, all } from 'redux-saga/effects';

// import { sagaEntity } from './index';
// import {} from '../../action/auth';
// import { loginApi, refreshTokenApi } from '../../../../api/index';
import { LoginPayload, RefreshTokenPayload } from '../../../../api/apiTypes';

export default function* authSaga() {
    yield all([
        // takeLatest()
    ])
}