import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor( private router: Router) { }

  personalInformation: any;

  submitted: boolean = false;

  items: MenuItem[];

    ngOnInit() {

        this.items = [
            {label: 'Step 1',
            routerLink: 'step1'},

            {label: 'Step 2',
            routerLink: 'step2'},

            {label: 'Step 3',
            routerLink: 'step3'},
        ];

    }

    nextPage() {
      if (1 + 1 == 2) {
          this.router.navigate(['steps/step2']);
          return;
      }

      this.submitted = true;
  }


}
