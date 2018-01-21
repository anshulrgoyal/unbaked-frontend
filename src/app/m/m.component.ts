import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-m',
  templateUrl: './m.component.html',
  styleUrls: ['./m.component.css']
})
export class MComponent implements OnInit {
@Input() text
  constructor() { }

  ngOnInit() {
  }

}
