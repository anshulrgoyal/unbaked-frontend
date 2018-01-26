import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service.service';
import { Http, Response } from '@angular/http';
import { Route, Router, ActivatedRoute, Params } from '@angular/router';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { AuthService } from '../auth.service';
import { Title, Meta } from '@angular/platform-browser';

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
  comment={text:"",author:{first:"",image:""}}
  isOpen=false;
  formed=false;
  is=false
  token:any
  book=false
  constructor(private dataservice: DataService,
    private router: Router,
    private routes: ActivatedRoute,
    private auth: AuthService,
    private titleService: Title,
    private meta: Meta) { }
  show = true
  done = false
  ngOnInit() {
    try{
      this.token=this.auth.getToken()
      this.comment.author.first=this.token.name;
      this.comment.author.image=this.token.image;
    }
    catch(e){}
    this.routes.params.subscribe((data: Params) => {
      this.dataservice.getBogs(data["id"]).subscribe((doc: Response) => {
        this.card = doc.json();
        this.titleService.setTitle(this.card.name.toUpperCase());
       this.meta.addTags([
          { name: 'author',   content: 'unbakedpotato'},
          { name: 'keywords', content: this.card.tags.toString()},
          { name: 'description', content: this.card.text.slice(0,200) }
        ]);
    
        if (this.auth.getToken()) {
          if (this.card.likedby.indexOf(this.auth.getToken().userId) != -1) {
            this.show = false;
          }
          if(this.card.bookmarked.indexOf(this.auth.getToken().userId)!=-1){
            this.book=true;
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

 //this.isOpen=this.dataservice.isOpen;
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
      this.formed=false
      this.comment={text:"",author:{first:"",image:""}};
      this.isOpen=true;
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
  addMe=()=>{
    this.isOpen=true;
   this.is=true
    console.log('oooooooooo')
    setTimeout(()=>{
      window.scrollTo(0,document.body.scrollHeight);
    },600)
    window.scrollTo(0,document.body.scrollHeight);
  }
  panelOpenState = true;
  booked=()=>{ 
    if(this.auth.getToken()){
      this.book?this.book=false:this.book=true;
      this.dataservice.booked(this.card._id).subscribe((res:Response)=>{
        
      })
    }
    else{
      this.router.navigate(['/','signup'])
    }
  }
}
