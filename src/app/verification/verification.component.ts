import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service.service';
import { Response } from '@angular/http';
import { setTimeout } from 'timers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
done=false;
show=false;
err=false;
  constructor(private route:ActivatedRoute,private data:DataService,private router:Router) { }

  ngOnInit() {
   this.data.verify( this.route.snapshot.params["token"]).subscribe((res:Response)=>{
     if(res.json().message=='verified'){
         this.show=true;
         this.done=true;
         setTimeout(()=>{
           this.router.navigate(['/'])
         },6000)
     }
     else{
       this.err=true
     }
   })
  }

}
