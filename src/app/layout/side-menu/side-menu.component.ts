import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {
  isSidebarOpen = true;
  menuItems: { icon: string; name: string; route: string }[] = [
    { icon: '🍔', name: 'Dashboard', route: '/product' },
    { icon: '🍔', name: 'People', route: '/' },
    { icon: '🍔', name: 'Schedule', route: '/' },
    { icon: '🍔', name: 'Time Off', route: '/' },
    { icon: '🍔', name: 'Attendence', route: '/' },
    { icon: '🍔', name: 'Payroll', route: '/' },
    { icon: '🍔', name: 'Documents', route: '/' },
  ];

  isActive(route: string) {
    return window.location.pathname === route;
  }
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
