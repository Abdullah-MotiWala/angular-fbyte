import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, SideMenuComponent],
  imports: [CommonModule, LayoutRoutingModule],
})
export class LayoutModule {}
