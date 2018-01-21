import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { DataService } from '../data.service.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  result: any = [{id:'',name:'',text:''}]
  constructor(private route: ActivatedRoute, private data: DataService) { }
show
done
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.show=`Search Result For ${params["term"]}`
      this.data.search(params['term']).subscribe((res: Response) => {
        this.result = res.json().output
        this.done=true;
      })
    })
  }

}
