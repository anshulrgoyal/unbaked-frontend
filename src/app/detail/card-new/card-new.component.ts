import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from '../../data.service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-new',
  templateUrl: './card-new.component.html',
  styleUrls: ['./card-new.component.css']
})
export class CardNewComponent implements OnInit {
  @Input() card
  constructor() { }

  ngOnInit() {
   // this.tellServer()
  }
  
}
