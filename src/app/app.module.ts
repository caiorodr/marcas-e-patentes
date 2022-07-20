import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from "primeng/menu";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { TableModule } from "primeng/table";
import { InputTextModule } from "primeng/inputtext";
import { InputNumberModule } from "primeng/inputnumber";
import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';

import { TabViewModule } from 'primeng/tabview';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { RatingModule } from "primeng/rating";
import { DataViewModule } from "primeng/dataview";
import { DropdownModule } from "primeng/dropdown";
import { AppMainComponent } from "./app.main.component";
import { PedidosComponent } from './components/pedidos/pedidos.component';
//

import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ProgressBarModule} from 'primeng/progressbar';

import { CustomerService } from './components/processos/customeservice';
import { ProcessosComponent } from './components/processos/processos.component';

import {StepsModule} from 'primeng/steps';


//





@NgModule({
	declarations: [
		DashboardComponent,
		AppComponent,
		PedidosComponent,
		ProcessosComponent,
		AppMainComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		StyleClassModule,
		RippleModule,
		ButtonModule,
		MenuModule,
		TableModule,
		InputTextModule,
		InputNumberModule,
		HttpClientModule,
		BrowserAnimationsModule,
		ButtonModule,
		TabViewModule,
		ReactiveFormsModule,
		CardModule,
		ToastModule,
		FormsModule,
		RatingModule,
		DataViewModule,
		DropdownModule,
		ChartModule,
		PanelModule,
		DialogModule,
		CalendarModule,
		SliderModule,
		MultiSelectModule,
		ContextMenuModule,
		ProgressBarModule,
		StepsModule
	],
	providers: [
		CustomerService,
	],
	bootstrap: [
		AppComponent,
		ProcessosComponent]
})
export class AppModule {
}
