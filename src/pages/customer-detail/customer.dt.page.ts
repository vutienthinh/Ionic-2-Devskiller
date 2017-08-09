import {Component} from "@angular/core";
import {CustomerService} from "../pages/customers/services/customer.service";
import { NavParams } from 'ionic-angular';
import { MeaningGender } form '../pipes/meangender';

@Component({
	selector: 'customer-detail-app',
	moduleId: module.id,
  templateUrl: 'customer.dt.html',
})
export class CustomerDtPage {
	private curCustomer: any = {};
  constructor(private navParams: NavParams, private cusservice: CustomerService) {
  	let id = navParams.get('id');
    this.cusservice.getCustomerById().then(cus => {
      this.curCustomer = cus;
    })
  }

}
