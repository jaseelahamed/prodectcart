import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc:HttpClient) { }
   
  products = [
    { name: 'shart', price: 20, quantity: 0 },
    { name: 'pants', price: 40, quantity: 0 },
    { name: 't-shart', price: 50, quantity: 0 }
  ];

  orderDetails: any = {};
  


  calculateOrder(sq:any,pq:any,tq:any) {

    let dt={
      sq,
      pq,
      tq
    }
   return this.hc.post("http://localhost:3000/calculateOrder",dt )
    
  }
}

