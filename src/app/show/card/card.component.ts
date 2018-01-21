import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../data.service.service';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card:{name:String,
    _id:string,
  image:String,
  text:String,
  author:string,
  tags:string[],
  like:Number,
  comment:string[],
  likedby:string[]
  

}

  constructor(private dataservice:DataService) { }

  ngOnInit() {
  }
 handleClick=(card)=>{

   
 }
 onAppear=(card)=>{
   card.class='animata'
   console.log(card.class)
 }
 @Input() content
}
