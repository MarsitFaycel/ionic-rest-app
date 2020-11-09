import { Component, OnInit } from '@angular/core';
import { MySharedService } from '../services/shared.service';

@Component({
  selector: 'app-cart-tab',
  templateUrl: './cart-tab.page.html',
  styleUrls: ['./cart-tab.page.scss'],
})
export class CartTabPage implements OnInit {
  public totalAmmount;

  constructor(private mySharedService:MySharedService) { }

  ngOnInit() {
    this.mySharedService.getProducts().subscribe(data => {
      

      this.totalAmmount = this.mySharedService.getTotalPrice();
    });
  }

}
