import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormControl, Validators, FormBuilder, FormArray} from '@angular/forms';
import {UtilService} from '../../services/util.service';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';

  form: FormGroup;

  constructor(private myHttpService: UtilService,
              private formBuilder: FormBuilder,
              private router: Router,
              private authenticationService: AuthenticationService) {
    this.form = formBuilder.group({
      'password': ['', [Validators.required]],
      'email': ['', [Validators.required,
        Validators.pattern('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?')
      ]],
    });

    this.form.statusChanges.subscribe();
  }

  ngOnInit() {

    var x = document.getElementById('logoutBtn');
    var y = document.getElementById('loginBtn');
    x.style.display = 'none';
    y.style.display = 'block';
  }

  onRegister() {
    this.router.navigate(['/register']);
  }

  onSubmit() {
   // this.router.navigate(['/profile']);
    this.error ='';
    this.loading = true;
    this.model.username = this.form.value.email;
    this.model.password = this.form.value.password;
    console.log("test"+ this.model.username + " "+ this.model.password);

    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe((result) => {
        if (result === true) {
          console.log(result);
          this.router.navigate(['/profile']);
        } else {
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      },(error) => {
        this.error = 'Username or password is incorrect';
      });
  }
}
