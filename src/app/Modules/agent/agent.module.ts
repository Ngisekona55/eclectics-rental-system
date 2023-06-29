import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { TenantsComponent } from './tenants/components/tenants/tenants.component';
import { HomeComponent } from './home.component';
import { MyPropertiesComponent } from './my-properties/components/my-properties/my-properties.component';
import { UnitsComponent } from './units/components/units/units.component';
import { NotificationsComponent } from './notifications/components/notifications/notifications.component';
import { SettingsComponent } from './settings/components/settings/settings.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { MaterialModule } from 'src/app/Angular-Material/material/material.module';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    DashboardComponent,
    TenantsComponent,
    HomeComponent,
    MyPropertiesComponent,
    UnitsComponent,
    NotificationsComponent,
    SettingsComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AgentRoutingModule,
    MaterialModule,
    MatSidenavModule
  ],
  exports: [RouterModule, SidenavComponent]
})
export class AgentModule { }
