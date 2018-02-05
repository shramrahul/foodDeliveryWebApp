import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UtilService} from '../../services/util.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';

  form: FormGroup;

  constructor(private myHttpService: UtilService,
              private formBuilder: FormBuilder,
              private router: Router,
              private authenticationService: AuthenticationService) {
    this.form = formBuilder.group({
      'userName': ['', [Validators.required]],
      'state': ['', [Validators.required]],
      'city': ['', [Validators.required]],
      'street': ['', [Validators.required]],
      'zip': ['', [Validators.required]],
      'password': ['', [Validators.required]],
      'email': ['', [Validators.required,
        Validators.pattern('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?')
      ]],
    });

    this.form.statusChanges.subscribe();
  }

  onSubmit(){
    this.loading = true;
    this.model.email = this.form.value.email;
    this.model.username = this.form.value.userName;
    this.model.password = this.form.value.password;
    this.model.passwordConf = this.form.value.password;
    this.authenticationService.register(this.model.email, this.model.username, this.model.password, this.model.passwordConf)
      .subscribe(result => {
        if (result === true) {
          console.log(result);
          this.router.navigate(['/']);
        } else {
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      });
  }

  ngOnInit() {
  }



}
