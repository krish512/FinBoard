import { Component, OnInit, Input } from '@angular/core';
import { SideNavItems } from '../../classes/sidenavitems.class';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Input() sideNavItems: SideNavItems[];

  constructor() { }

  ngOnInit() {
  }

}
