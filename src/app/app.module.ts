import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { FurnitureManagementComponent } from './furniture-management/furniture-management.component';
import { CustomerComponent } from './customer/customer.component';
import { AccountComponent } from './account/account.component';
import { AddressComponent } from './address/address.component';
import { CartComponent } from './cart/cart.component';
import { CustomerfeedbackComponent } from './customerfeedback/customerfeedback.component';
import { CustomershoppingComponent } from './customershopping/customershopping.component';
import { OrderCancellationComponent } from './order-cancellation/order-cancellation.component';
import { PaymentComponent } from './payment/payment.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdateAddressComponent } from './address/update-address/update-address.component';
import { AddfurnitureComponent } from './furniture-management/addfurniture/addfurniture.component';
import { UpdateCustomerComponent } from './customer/update-customer/update-customer.component';
import { ViewAllFeedbackComponent } from './customerfeedback/view-all-feedback/view-all-feedback.component';
import { UpdateFurnitureComponent } from './furniture-management/update-furniture/update-furniture.component';
import { ViewAllCustomersComponent } from './customer/view-all-customers/view-all-customers.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    FurnitureManagementComponent,
    CustomerComponent,
    AccountComponent,
    AddressComponent,
    CartComponent,
    CustomerfeedbackComponent,
    CustomershoppingComponent,
    OrderCancellationComponent,
    PaymentComponent,
    UpdateAddressComponent,
    UpdateCustomerComponent,
    ViewAllFeedbackComponent,
    AddfurnitureComponent,
    UpdateFurnitureComponent,
    ViewAllCustomersComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
