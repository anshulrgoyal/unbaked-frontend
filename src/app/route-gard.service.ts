import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class RouteGardService implements CanActivate {
canActivate(){
  if(this.auth.getToken()){
    return true
  }
  else{
this.route.navigate(['/','signup'])
    return false
  }
}
  constructor(private auth:AuthService,private route:Router) { }

}
