import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
show
  constructor(private data:DataService) { }

  ngOnInit() {
    this.show=this.data.show
  }
 
}
