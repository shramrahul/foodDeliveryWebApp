import { Component, OnInit } from '@angular/core';
import { DbServiceService } from '../../services/db-services/db-service.service';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authenticationService : AuthenticationService, private router :Router) { }

  ngOnInit() {
  }
  OnLogout(){
    var x = document.getElementById("logoutBtn");
    x.style.display = "none";
    this.authenticationService.logout();
    this.router.navigate(['/login']);

  }




  onClick(dbService:DbServiceService){
    dbService.pushData();
  }

}
