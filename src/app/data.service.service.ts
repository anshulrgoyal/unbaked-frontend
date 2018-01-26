import { Injectable, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class DataService {
  Cards: {};
  blog: {} = { name: '', text: '', image: '', tags: '' };
  data: any;
  keys = ['new', 'best', 'viral']
  show = false;
  constructor(private http: Http, private route: Router, private auth: AuthService) { }
  isOpen = false
  addOptions = () => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${this.auth.getToken().token}`);
    return new RequestOptions({ headers: headers });
  }
  getBolg = (key) => {
    try {
const options = this.addOptions()
      return this.http.get('https://unbakedpotato.herokuapp.com/api/device/' + key, options);
    }
    catch (e) {
      return this.http.get('https://unbakedpotato.herokuapp.com/api/device/' + key)
    }
  }
  getBogs = (id) => {
    return this.http.get('https://unbakedpotato.herokuapp.com/api/device/' + id);
  }

  editBlog = (id, obj) => {
    const options = this.addOptions()
    return this.http.put('https://unbakedpotato.herokuapp.com/api/device/' + id, obj, options);
  }
  addComment = (id, obj) => {
    const options = this.addOptions()
    return this.http.post('https://unbakedpotato.herokuapp.com/api/device/' + id, obj, options);
  }
  createBlog = (obj) => {
    const options = this.addOptions()
    return this.http.post('https://unbakedpotato.herokuapp.com/api/', obj, options);
  }
  tellServer = (id) => {
    return this.http.get('https://unbakedpotato.herokuapp.com/api/read/' + id);
  }
  delete = (id) => {
    const options = this.addOptions()
    return this.http.delete('https://unbakedpotato.herokuapp.com/api/device/' + id, options)
  }
  search = (term) => {
    return this.http.get('https://unbakedpotato.herokuapp.com/api/search/' + term)
  }
  getTags = (id) => {
    return this.http.get('https://unbakedpotato.herokuapp.com/api/tag/' + id)
  }
  like = (id) => {
    const options = this.addOptions()
    return this.http.get('https://unbakedpotato.herokuapp.com/api/like/' + id, options)
  }
  verify = (token) => {
    return this.http.get('https://unbakedpotato.herokuapp.com/api/user/' + token)
  }
  booked = (id) => {
    const options = this.addOptions();
    return this.http.get('https://unbakedpotato.herokuapp.com/api/bookmark/' + id, options)
  }
}
