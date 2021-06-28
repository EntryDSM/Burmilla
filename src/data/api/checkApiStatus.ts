export default function checkApiStatus(apiStatus) {
    return {
      _0: apiStatus === 0,
      _200: apiStatus === 200,
      _201: apiStatus === 201,
      _204: apiStatus === 204,
      _400: apiStatus === 400,
      _401: apiStatus === 401,
      _403: apiStatus === 403,
      _404: apiStatus === 404,
    };
  }
  