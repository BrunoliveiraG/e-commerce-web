import axios from "axios";
import Cookies from 'js-cookie';
import ApiData from '../dtos/ApiData';

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

api.interceptors.response.use(res => {
  console.log("test");
  if(res.headers['access-token']) {
    const apiData: ApiData = {
      'access-token': res.headers['access-token'],
      client: res.headers.client,
      expiry: res.headers.expiry,
      'token-type': res.headers['token-type'],
      uid: res.headers.uid
    };
    console.log("antes");
    console.log(api.defaults.data);

    api.defaults.data = apiData;
    console.log("apiData")
    console.log(apiData)
    console.log("COOKIES")
    console.log(Cookies.get())
    console.log("COOKIE SET")
    console.log()
    Cookies.set('@api-data', apiData);
    console.log("COOKIES DEPOIS")
    console.log(Cookies.get())
    console.log("O testeeeee")
    console.log(Cookies.get('@api-data'));
  }

  return res;
})

api.interceptors.request.use(req => {
  if(req.url.includes('admin')) {
    let apiData: ApiData;
    const apiCookie = (Cookies.get('@api-data'));
    if (apiCookie) {
      apiData = JSON.parse(apiCookie);
    }
    req.data = apiData;
  }

  return req;
})

export default api;