import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
	templateUrl: './dashboard.component.html',
	styleUrls  : ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {

	data: any;

    chartOptions: any;
	constructor() {
	}

	async ngOnInit() {
		this.data = {
            labels: ['A','B','C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }
            ]
		}
	}

	ngOnDestroy() {
	}
}
