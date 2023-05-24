import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  productAQty: number = 0;
  productBQty: number = 0;
  productCQty: number = 0;
  isGiftWrap: boolean = false;
  checkoutResult: any;


  constructor(private http: HttpClient) {}


}

