import { Component, OnInit } from '@angular/core';
import { SideNavItems } from '../classes/sidenavitems.class';
import { SideNavService } from '../services/sidenav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [SideNavService]
})
export class HomeComponent implements OnInit {
  sideNavItems: SideNavItems[];

  constructor(private sideNavService: SideNavService) {
    this.sideNavItems = [];
   }

  ngOnInit() {
    this.sideNavItems = this.sideNavService.getSideNavItems();
    this.sideNavItems[0].active = true;
  }

}