import { Injectable, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class DataService {
  Cards: {};
  blog: {} = { name: '', text: '', image: '', tags: '' };
  data: any;
 keys=['new','best','viral']
show=false;
  constructor(private http: Http, private route: Router, private auth: AuthService) { }

  getBolg = (key) => {

    return this.http.get('https://unbakedpotato.herokuapp.com/api/device/' + key);
  }
  getBogs = (id) => {
    return this.http.get('https://unbakedpotato.herokuapp.com/api/device/' + id);
  }

  editBlog = (id, obj) => {
    if (this.auth.getToken().userId.length < 0) {
      return 'Please Log In';
    }
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Braer ${this.auth.getToken().token}`);

    const options = new RequestOptions({ headers: headers });
    return this.http.put('https://unbakedpotato.herokuapp.com/api/device/' + id, obj, options);
  }
  addComment = (id, obj) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json'); 
    headers.append('Authorization', `Braer ${this.auth.getToken().token}`);

    const options = new RequestOptions({ headers: headers });
    return this.http.post('https://unbakedpotato.herokuapp.com/api/device/' + id, obj, options);
  }
  createBlog = (obj) => {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${this.auth.getToken().token}`);

    const options = new RequestOptions({ headers: headers });
    return this.http.post('https://unbakedpotato.herokuapp.com/api/', obj, options);
  }
  tellServer = (id) => {
    return this.http.get('https://unbakedpotato.herokuapp.com/api/read/'+id);
  }
  delete=(id)=>{
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${this.auth.getToken().token}`);

    const options = new RequestOptions({ headers: headers });
    return this.http.delete('https://unbakedpotato.herokuapp.com/api/device/'+id,options)

  }
search=(term)=>{
 return this.http.get('https://unbakedpotato.herokuapp.com/api/search/'+term)
}
getTags=(id)=>{
  return this.http.get('https://unbakedpotato.herokuapp.com/api/tag/'+id)
}
like=(id)=>{
  const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${this.auth.getToken().token}`);

    const options = new RequestOptions({ headers: headers });
  return this.http.get('https://unbakedpotato.herokuapp.com/api/like/'+id,options)
}
} 


 