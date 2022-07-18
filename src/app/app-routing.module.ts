import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AppMainComponent} from "./app.main.component";
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ProcessosComponent } from './components/processos/processos.component';

const routes: Routes = [
	{path    : 'dashboard', component: DashboardComponent,},
	{path    : 'pedidos', component: PedidosComponent,},
	{path    : 'processos', component: ProcessosComponent,},
	{path	 : '', redirectTo:'dashboard', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
