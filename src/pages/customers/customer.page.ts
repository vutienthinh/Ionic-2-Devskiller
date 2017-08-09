import {Component} from "@angular/core";
import {CustomerDetailPage} from "../pages/customers/customer.detail.page";
import {CustomerService} from "../pages/customers/services/customer.service";

@Component({
	selector: 'customers-app',
	moduleId: module.id,
  templateUrl: 'customer.html',
  directives: [CustomerDetailPage],
  providers: [CustomerService]
})
export class CustomerPage {
	private customers: any[];
  constructor(private cusservice: CustomerService) {
  	this.cusservice.getCustomers().then(cusms => {
  		this.customers = cusms;
  	})
  }

}
