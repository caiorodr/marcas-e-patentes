import { Component, OnInit } from '@angular/core';

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

  totalRecords: number         = 0;
	loading: boolean             = false;
	products: Product[]       = [];
	sortOptions: SelectItem[] = [];
	sortKey: string           = "";
	sortOrder: number         = 0;
	sortField: string         = "";
	eBreakSet: boolean        = false;

  constructor() { }

  ngOnInit(): void {
  }

}
