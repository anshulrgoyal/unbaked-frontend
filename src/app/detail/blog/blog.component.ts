import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { DataService } from '../../data.service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blog:any = { name: '', text: '', image: '', tags: '' };
  constructor(private data: DataService) { }

  ngOnInit() {
   // this.blog = this.data.blog;
  }

}
