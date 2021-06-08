export const getAccessToken = () => {
    return localStorage.getItem('access_token');
  };
  
  export const getRefreshToken = () => {
    return localStorage.getItem('refresh_token');
  };
  
  export const setToken = (tokens: {
    access_token?: string | null;
    refresh_token?: string | null;
  }) => {
    localStorage.setItem('access_token', tokens.access_token || '');
    localStorage.setItem('refresh_token', tokens.refresh_token || '');
  };
  
  export const clearStorage = () => {
    localStorage.clear();
  };
  