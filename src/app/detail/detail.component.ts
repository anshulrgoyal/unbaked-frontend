import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service.service';
import { Http, Response } from '@angular/http';
import { Route, Router, ActivatedRoute, Params } from '@angular/router';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @ViewChild("like") like: ElementRef
  card: any = { name: "", text: "", image: "", tags: [], comment: [], _id: "" }
  cardId: string
  data: any
  constructor(private dataservice: DataService, private router: Router, private routes: ActivatedRoute, private auth: AuthService) { }
  show = true
  done = false
  ngOnInit() {
    this.routes.params.subscribe((data: Params) => {
      this.dataservice.getBogs(data["id"]).subscribe((doc: Response) => {
        this.card = doc.json();
        if (this.auth.getToken()) {
          if (this.card.likedby.indexOf(this.auth.getToken().userId) != -1) {
            this.show = false;
          }
        }
        //this.data=this.dataservice.data;
        // this.dataservice.blog=doc.json()
        this.tellServer()
        this.done = true
      })
      // console.log(this.like)
      this.dataservice.getTags(data["id"]).subscribe((res: Response) => {
        this.data = res.json().blog.filter(el => el._id != data["id"])
        console.log(this.data)
      })
    })

  }
  tellServer = () => {
    this.routes.params.subscribe((data) => {
      this.dataservice.tellServer(data["id"]).subscribe((res: Response) => {
        //console.log('di');
        setTimeout(this.tellServer, 60000)
      })

    })
  }
  onSubmit = (form) => {
    this.dataservice.addComment(this.card._id, form.value).subscribe((res: Response) => {
      this.card.comment.push(res.json());
    }
    )
  }
  liked = () => {
    if (this.auth.getToken()) {
      this.show ? this.show = false : this.show = true
      this.dataservice.like(this.card._id).subscribe((res: Response) => {
        this.card.like = res.json().like
        console.log(res.json())
      })
    }
    else {
      this.router.navigate(["/", "signup"])
    }


  }
  panelOpenState=false;
}
