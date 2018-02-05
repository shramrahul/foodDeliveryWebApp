import { Component, OnInit } from '@angular/core';
import { DbServiceService } from '../../services/db-services/db-service.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }



  onClick(dbService:DbServiceService){
    dbService.pushData();
  }

}
