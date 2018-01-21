import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Response } from '@angular/http/src/static_response';
import { Http } from '@angular/http';
import { DataService } from '../data.service.service';
import { ActivatedRoute } from '@angular/router';
import { UrlSegment } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
second=false
  constructor(private auth: AuthService,  private route: ActivatedRoute,private data:DataService) { }
  show = false
  showit=true;
  token:any;
  showboth=true;
  search=false;
  value
  error
  ngOnInit() {
    try{
      this.route.url.subscribe((url:[UrlSegment])=>{
        url[0].path=='signup'?this.showit=false:this.showit=true
      })
    }
    catch(e){
      
    }
    if(this.auth.getToken()){
      this.showboth=false;
      this.token=this.auth.getToken()
      
    }
    if(screen.width<500){
      this.second=true;
    }



  }
  showIt = () => {
    this.show ? this.show = false : this.show = true;
    this.search=false;
  }
  onSubmit = (f) => {
    this.auth.signIn(f.value.email, f.value.password).subscribe((res: Response) => {
      this.auth.saveToken(res.json());
      this.token=this.auth.getToken()
      console.log(this.auth.getToken());
      console.log(res.json());
      if(res.json().userId){
        this.show=false;
        this.showboth=false;
      }else{
        this.error=true
      }
      
    });
  }

  logout=()=>{
    this.auth.logOut()
    this.showboth=true;
    this.token={}
  }
  onChange=(event)=>{
    this.value=event.target.value
    
    
  }
  showSearch=()=>{
    this.search?this.search=false:this.search=true;
    this.show=false;
  }
  
}
