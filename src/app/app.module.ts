import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/headers/header.component';
import { OrderCompleteComponent } from './modules/orders/order_complete/order.component';
import { FooterComponent } from './modules/footers/footer.component';
import { HomeComponent } from './modules/home/home.component';
import { SyncDevicesComponent } from './modules/sync_devices/sync_devices.component';
import { UiSwitchModule } from 'ngx-ui-switch';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OrderCompleteComponent,
    HomeComponent,
    SyncDevicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
