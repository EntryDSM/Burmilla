import axios from 'axios';

import { BaseURL } from './baseURL';
import * as T from './apiTypes';
import { getAccessToken } from '../../utils/token';

export enum API_STATUS {
    loginStatus = 'loginStatus',
    refreshTokenStatus = 'refreshTokenStatus',
    getStatisticsStatus = 'getStatisticsStatus',
    getApplicantsListStatus = 'getApplicantsListStatus',
    getApplicantInfoStatus = 'getApplicantInfoStatus',
    updateApplicantStatusStatus = 'updateApplicantStatusStatus',
}