import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http/src/static_response';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }
  userData: {
    userId: '',
    token: '',
    image: '',

  };


  signIn = (email, password) => {
    return this.http.post('https://unbakedpotato.herokuapp.com/api/auth/signin', { email, password });
  }
  saveToken = (data: object) => {
    localStorage.setItem('currentUser', JSON.stringify(data));
  }
  getToken = () => {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
  signUp=(data:Object)=>{
    return this.http.post('https://unbakedpotato.herokuapp.com/api/auth/signup',data)
  }
  logOut=()=>{
    localStorage.clear();
  }
}
