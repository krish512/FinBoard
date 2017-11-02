import { Component, OnInit } from '@angular/core';
import { InfoCardItem } from '../classes/infocarditem.class';

const Item : InfoCardItem = {
  icon: "home",
  name: "Total Expenses",
  value: 1264800
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  item = Item;

  constructor() { }

  ngOnInit() {
  }

}
