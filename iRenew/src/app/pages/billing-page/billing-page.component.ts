import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billing-page',
  templateUrl: './billing-page.component.html',
  styleUrls: ['./billing-page.component.scss'],
})
export class BillingPageComponent {


  

  public Address!: FormGroup;
  public Billing!: FormGroup;

  api = 'http://localhost:3000/users';

  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.Address = this.formbuilder.group({
      StreetNumber: new FormControl('', Validators.required),
      StreetName: new FormControl('', Validators.required),
      Suburb: new FormControl('', Validators.required),
      CityorProvince: new FormControl('', Validators.required),
      PostalCode: new FormControl('', Validators.required),
    });
  }

  ChangeAdrress() {
    this.http.post<any>(this.api, this.Address.value).subscribe(
      (resp) => {
        console.log(this.Address);
        alert('address changed successfully');

        this.Address.reset();
        this.router.navigate(['/landing']);
      },
      (error) => {
        alert('something went wrong');
      }
    );
     {
      this.Billing = this.formbuilder.group({
        AccountHolderFirstName: new FormControl('', Validators.required),
        AccountHolderLastName: new FormControl('', Validators.required),
        CardNumber: new FormControl('', Validators.required),
        CVV: new FormControl('', Validators.required),
      });
      
     
    }
  }
  ChangeBilling() {
    this.http.post<any>(this.api, this.Billing.value).subscribe(
      (resp) => {
        console.log(this.Billing);
        alert('billing changed successfully');
  
        this.Billing.reset();
        this.router.navigate(['/landing']);
      },
      (error) => {
        alert('something went wrong');
      }
    );
  }
  
}


