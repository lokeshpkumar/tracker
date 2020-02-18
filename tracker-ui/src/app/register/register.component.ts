import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder } from '@angular/forms';
import { RegistrationService } from '../services/registeration.service';
import { User } from '../models/user';
import { MessageService } from 'primeng/api';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  
  userForm;
  registering: boolean;
  public iconClass: string = "pi pi-sign-in";

  constructor(
    private regService: RegistrationService,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private router: Router,
  ) { 
    this.userForm = this.formBuilder.group({
      email: '',
      userName: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
    });
  }

  ngOnInit() {
  }

  onSubmit(customerData) {
    this.registering = true;
    setTimeout(()=>{ this.router.navigate([]) }, 4000);
    if ( customerData.password != customerData.confirmPassword ) {
      this.iconClass = "pi pi-spin pi-spinner";
      console.log("Passwords should match ..");
      this.alertService.error("Passwords do not match");
      this.registering = false;
    } else {
      // Process checkout data here
      console.warn('Your order has been submitted', customerData);
      this.iconClass = "pi pi-spin pi-spinner";
      // this.regService.register(customerData);
      this.userForm.reset();
      this.router.navigate(['/login']);
      this.alertService.success("Registration successful, try to login...");
    }
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

}
