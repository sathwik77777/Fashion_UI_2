import { Component } from '@angular/core';
import { Order } from '../../Models/order';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-getorderbyuserid',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './getorderbyuserid.component.html',
  styleUrl: './getorderbyuserid.component.css'
})
export class GetorderbyuseridComponent {
  userId?:number=0;
  order: Order;
  errMsg: string = '';
  isorderExist: boolean = false;
  constructor(
    private http: HttpClient,
    private roter: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.order = new Order();
    
    this.activateRoute.params.subscribe((p) => (this.userId = p['mid']));
    console.log(this.userId);
    this.search();
  }
  search() {
    console.log(this.order);
    this.http
      .get<Order>(
        'http://localhost:5254/api/Order/GetOrdersByUser/' + this.userId
      )
      .subscribe((response) => {
        console.log(response);
        if (response != null) {
          this.order = response;
          this.isorderExist = true;
          this.errMsg = '';
        } else {
          this.errMsg = 'Invalid order Id';
          this.isorderExist = false;
        }
      });

  }

}
