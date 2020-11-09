import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileTabPage } from './profile-tab.page';
import { LoginComponent } from './login/login.component';
import { OrdersHistoryComponent } from './orders-history/orders-history.component';
import { SavedAddressComponent } from './saved-address/saved-address.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileTabPage
  },
  {
    path: 'login',
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileTabPageRoutingModule {}
