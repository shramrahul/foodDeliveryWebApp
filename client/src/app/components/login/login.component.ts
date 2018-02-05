import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormControl, Validators, FormBuilder, FormArray} from '@angular/forms';
import {UtilService} from '../../services/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  constructor(private myHttpService: UtilService,private formBuilder: FormBuilder ,private router:Router) {
    this.form = formBuilder.group({
      'password':['',[Validators.required]],
      'email':['',[Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]],
    });

    this.form.statusChanges.subscribe();
  }

  ngOnInit() {
  }

  onRegister() {
    this.router.navigate(['/register']);
  }

  onSubmit(){

  }
}
