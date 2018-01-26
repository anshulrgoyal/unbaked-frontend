import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service.service';
import { Response, Http } from '@angular/http';
import { Headers } from '@angular/http';
import { RequestOptions } from '@angular/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  blog: any = { name: '', text: '', image: '', tags: '' };
  constructor(private data: DataService,
     private http: Http,
     private router:Router) { }
  formData: any;
  file: any;
  ngOnInit() {
    this.blog = this.data.blog;
  }
  onsubmit = (form) => {
   this.data.createBlog(form.value).subscribe((res:Response)=>{
      console.log(res.json());
      this.router.navigate(["/",res.json()._id])
   })
    }
    enter=(event)=>{
      if(event.key=="Enter"){
        this.blog.text.concat('<br>')
      }
  }
  /*getFile = (event) => {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      let headers = new Headers()
      headers.append('Content-Type', 'multipart/form-data');
      let options = new RequestOptions({ headers: headers });
      formData.append('uploadFile', file, file.name);
      this.http.post(`https://test15119.herokuapp.com/api/file`, formData, options).subscribe((res:Response)=>{
        console.log(res.json())
      })
        
    }*/
  }
