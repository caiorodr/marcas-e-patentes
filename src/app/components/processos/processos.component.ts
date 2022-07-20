import { Component, OnInit } from '@angular/core';
import { ProcessosService } from './services/processos.service';

interface Product {
	id?: string;
	code?: string;
	name?: string;
	description?: string;
	price?: number;
	quantity?: number;
	inventoryStatus?: string;
	category?: string;
	image?: string;
	rating?: number;
}

interface SelectItem {
	label?: string;
	value?: string;
}

@Component({
	selector: 'app-processos',
	templateUrl: './processos.component.html',
	styleUrls: ['./processos.component.scss']
})


export class ProcessosComponent implements OnInit {

	totalRecords: number = 0;
	loading: boolean = false;
	products: Product[] = [];
	sortOptions: SelectItem[] = [];
	sortKey: string = "";
	sortOrder: number = 0;
	sortField: string = "";
	eBreakSet: boolean = false;

	constructor(private processosService: ProcessosService) { }

	ngOnInit() {
		this.processosService.getProducts().then(data => this.products = data);

		this.sortOptions = [
			{ label: 'Price High to Low', value: '!price' },
			{ label: 'Price Low to High', value: 'price' }
		];
	}

	onSortChange(event) {
		let value = event.value;

		if (value.indexOf('!') === 0) {
			this.sortOrder = -1;
			this.sortField = value.substring(1, value.length);
		}
		else {
			this.sortOrder = 1;
			this.sortField = value;
		}
	}

	teste(event: any) {
		console.log("teste");
	}
}
