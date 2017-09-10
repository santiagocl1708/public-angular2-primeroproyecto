import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router'

import {AddComponent as orderAddComponent} from './orders/add/add.component'
import{CoustomersModule}from './coustomers/coustomers.module';
import{OrdersModule}from './orders/orders.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { IndexComponent } from './customers/index/index.component';
import { MenuComponent } from './menu/menu.component';
import { CurrentOptionComponent } from './current-option/current-option.component';
import {MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule, 

} from '@angular/material';
import { AddComponent } from './customers/add/add.component';
import { ListComponent } from './customers/list/list.component';

const appRoutes: Routes =[
  {path: 'customers/index', component: IndexComponent},
  {path: 'orders/add',component: orderAddComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MenuComponent,
    CurrentOptionComponent,
    AddComponent,
    ListComponent

  ],
  imports: [
    BrowserModule,
    CoustomersModule,
    OrdersModule,
    RouterModule.forRoot(appRoutes),
      BrowserAnimationsModule,
      MdAutocompleteModule,
      MdButtonModule,
      MdButtonToggleModule,
      MdCardModule,
      MdCheckboxModule,
      MdChipsModule,
      MdCoreModule,
      MdDatepickerModule,
      MdDialogModule,
      MdExpansionModule,
      MdGridListModule,
      MdIconModule,
      MdInputModule,
      MdListModule,
      MdMenuModule,
      MdNativeDateModule,
      MdPaginatorModule,
      MdProgressBarModule,
      MdProgressSpinnerModule,
      MdRadioModule,
      MdRippleModule,
      MdSelectModule,
      MdSidenavModule,
      MdSliderModule,
      MdSlideToggleModule,
      MdSnackBarModule,
      MdSortModule,
      MdTableModule,
      MdTabsModule,
      MdToolbarModule,
      MdTooltipModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
