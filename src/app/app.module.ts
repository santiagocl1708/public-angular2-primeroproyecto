import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router'

import {AddComponent as orderAddComponent} from './orders/add/add.component'
import{CoustomersModule}from './coustomers/coustomers.module';
import{OrdersModule}from './orders/orders.module';

import { AppComponent } from './app.component';
import { IndexComponent } from './customers/index/index.component';
import { MenuComponent } from './menu/menu.component';
import { CurrentOptionComponent } from './current-option/current-option.component';

const appRoutes: Routes =[
  {path: 'customers/index', component: IndexComponent},
  {path: 'orders/add',component: orderAddComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MenuComponent,
    CurrentOptionComponent

  ],
  imports: [
    BrowserModule,
    CoustomersModule,
    OrdersModule,
    RouterModule.forRoot(
      appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
