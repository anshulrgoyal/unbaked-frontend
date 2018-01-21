import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  best
  viral
  neww
  contents: string[] = [];
show=false
  constructor(private data: DataService) { }

  ngOnInit() {

    this.data.getBolg('best').subscribe((res: Response) => {
      const data = res.json();
      console.log(data);
      this.best = data.blog;
      this.show=true
    });
    this.data.getBolg('viral').subscribe((res: Response) => {
      const data = res.json();
      console.log(data);
      this.viral = data.blog;
      this.show=true
    });
    this.data.getBolg('new').subscribe((res: Response) => {
      const data = res.json();
      console.log(data);
      this.neww = data.blog;
      this.show=true
    });


  }
}
