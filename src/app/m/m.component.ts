import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-m',
  templateUrl: './m.component.html',
  styleUrls: ['./m.component.css']
})
export class MComponent implements OnInit {
@Input() text
  constructor() { }
small=false
  ngOnInit() {
if(screen.width<500){
  this.small=true
}
  }

}
