import { Component } from '@angular/core';
import { MySharedService } from '../services/shared.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  public cartProductCount: number = 0;
  constructor(
    private mySharedService: MySharedService
  ) { }

  ngOnInit() {
    this.mySharedService.getProducts().subscribe(data => {
      this.cartProductCount = data.length;
    })
  }
}
