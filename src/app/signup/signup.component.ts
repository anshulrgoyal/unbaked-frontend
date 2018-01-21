import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
show=false;
  constructor(private auth:AuthService,private router:Router) { }
showen1=false;
showen=false
  ngOnInit() {
  }

  onSubmit=(form)=>{
   this.auth.signUp(form.value).subscribe((res:Response)=>{
     //this.auth.saveToken(res.json())
    // this.router.navigate(["/"])
    this.show=true
    })
   console.log(form.value)
  }
  showDone=()=>{
    this.showen=true;
    setTimeout(()=>{
      this.showen1=true;
    },6000)
  }
}
