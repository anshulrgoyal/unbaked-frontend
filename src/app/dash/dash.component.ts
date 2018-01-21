import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
text="ansajhdkjsfjkndkjnsdjnkjsvnkjfbkjndfkjndfkjndfkj<br>kwudhkwdhkdwhf"
  constructor() { }
@ViewChild('dash') dash:ElementRef; 
  ngOnInit() {
    console.log(this.dash.nativeElement.innerHTML)
  }
changed=()=>{
  console.log(this.dash.nativeElement.innerHTML)
}
}
