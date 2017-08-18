import { Component, OnInit } from '@angular/core';

import {DataService} from '../../services/data.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  isim : 'burak';
  
  constructor(private dataService:DataService) { 
    console.log("Constructor runned")
    
  }

  ngOnInit() {
  }
  
}
