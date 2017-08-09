import {Component, Input} from "@angular/core";
import { NavController } from 'ionic-angular';
import {CustomerDtPage} from "../pages/customer-detail/customer.dt.page";

@Component({
	selector: 'customer-app',
	moduleId: module.id,
  templateUrl: 'customer.detail.html'
})
export class CustomerDetailPage {

  constructor(private nav: NavController) {
  }

  @Input() curCustomer: any = {};

  goToDetail(customer){
		this.nav.push(CustomerDtPage, {
      id: customer.id,
    });
	}

}
