import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MySharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  public cartItems;
  

  constructor(
    private mySharedService: MySharedService
  ) { }

  ngOnInit() {

    this.mySharedService.getProducts().subscribe(data => {
      this.cartItems = data;

    
    });

  }
// Remove item from cart list
removeItemFromCart(productId) {
  /* this.cartItems.map((item, index) => {
    if (item.id === productId) {
      this.cartItems.splice(index, 1);
    }
  });

  this.mySharedService.setProducts(this.cartItems); */

  this.mySharedService.removeProductFromCart(productId);

}

emptyCart() {
  this.mySharedService.emptryCart();
}


}
