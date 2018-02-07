import {Component, Input, OnInit} from '@angular/core';
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
      'zip': ['', [Validators.required, Validators.pattern('[0-9]*')]],
      'password': ['', [Validators.required]],
      'email': ['', [Validators.required,
        Validators.pattern('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?')
      ]],
    });

    this.form.statusChanges.subscribe();
  }

  onSubmit(){



    this.error='';
    this.loading = true;
    this.model.email = this.form.value.email;
    this.model.username = this.form.value.userName;
    this.model.password = this.form.value.password;
    this.model.state = this.form.value.state;
    this.model.city = this.form.value.city;
    this.model.zipcode = this.form.value.zip;
    this.model.street = this.form.value.street;
    this.authenticationService.register(this.model)
      .subscribe(result => {
        if (result === true) {
          console.log(result);
          this.Login()
          //this.router.navigate(['/']);

        } else {
          this.loading = false;
        }
      },(error)=>{
        this.error = 'Cannot register.';
      });
  }

  ngOnInit() {
  }

  private Login() {
    this.authenticationService.login(this.model.email, this.model.password)
      .subscribe(result => {
        if (result === true) {
          console.log(result);

          var x = document.getElementById('registerModal');
          x.style.display = 'none';
          this.router.navigate(['/profile']);
        } else {
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      });
  }
}
