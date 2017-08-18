import { Component, OnInit } from '@angular/core';

import {DataService} from '../../services/data.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  isim : 'burak';
  posts : Post[];
  
  constructor(private dataService:DataService) { 
    console.log("Constructor runned");
  
    
  }

  ngOnInit() {
    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    })
  
 

  } 
  
}
interface Post{
  id :number;
  title:string;
  body:string;
  userId:number;
}