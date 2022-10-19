export const config = {
  // Due to cors issues, we have to proxy the request to the backend
  restApi: 'https://alza-corsproxy.herokuapp.com/https://www.alza.cz/Services/RestService.svc/v2',
  // restApi: 'http://localhost:8080/https://www.alza.cz/Services/RestService.svc/v2',
}
