import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../data.service.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
blog:any={name:"",text:"",image:"",tags:""}
name="jhbhj"
  constructor(private route:ActivatedRoute,private dataService:DataService,private router:Router) { 
    var id=this.route.snapshot.params["id"]
      this.dataService.getBogs(id).subscribe((data:Response)=>{
        this.blog=data.json()
        console.log(data.json())
      })
      
      
    }
delete=(event)=>{
  event.preventDefault();
  this.dataService.delete(this.blog._id).subscribe((res:Response)=>{
    console.log(res.json())
    this.router.navigate(['/'])
  })
}
  ngOnInit() {
    
   
}
onsubmit=(form)=>{
  console.log(form)
}
}