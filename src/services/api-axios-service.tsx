import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { url } from 'inspector';
import { Observable, from } from 'rxjs';

function ApiService(){
 const baseURL = 'http://localhost:8080/user';
 function  get(url:string): Observable<any>{
const requestObservable = from(
      axios.get(`${baseURL}${url}`))
    return requestObservable;
   }
   return  {
      get
   }
}
export default ApiService;


