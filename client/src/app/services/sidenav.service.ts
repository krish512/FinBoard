import { Injectable } from '@angular/core';
import { SideNavItems } from '../classes/sidenavitems.class';

@Injectable()
export class SideNavService {

  sideNavItems: SideNavItems[] = [
    {
      icon: "home",
      name: "Dashboard",
      path: "/",
      active: true
    },
    {
      icon: "money",
      name: "Transactions",
      path: "/",
      active: false
    },
    {
      icon: "tags",
      name: "Rules",
      path: "/",
      active: false
    },
    {
      icon: "upload",
      name: "Import",
      path: "/",
      active: false
    },
    {
      icon: "user",
      name: "Profile",
      path: "/",
      active: false
    }
  ]

  constructor() { }

  getSideNavItems(): SideNavItems[] {
    return this.sideNavItems;
  }
}
