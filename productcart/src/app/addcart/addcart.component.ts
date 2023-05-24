import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent {
  products = [
    { name: 'Shart', price: 20, quantity: 0 },
    { name: 'Pants', price: 40, quantity: 0 },
    { name: 'T-shart', price: 50, quantity: 0 }
  ];

  orderDetails: any = {};

  constructor(private http: HttpClient) {}

  calculateOrder() {
    this.http.post('http://localhost:3000/calculateOrder', { products: this.products })
      .subscribe((data: any) => {
        this.orderDetails = data;
      });
  }
}


//   pform=this.fb.group({
//     sQuantity: 0,
//     pQuantity: 0,
//     tQuantity: 0,
   
//   })

//   clicked(){
 
//     let sq=this.pform.value.sQuantity
//     let pq=this.pform.value.pQuantity
//     let tq=this.pform.value.tQuantity
    
   
  
//    let res=this.ds.calculateOrder(sq,pq,tq)
//    res.subscribe((res:any)=>{
//     alert(res.message)
//    },
//    (err:any)=>{
//     alert(err.error.message)
//    })
   
  

// }
// calculateOrder() {
//   this.hc.post('/calculateOrder', { products: this.products })
//     .subscribe((data: any) => {
//       this.orderDetails = data;
//     });

