import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { TenantsComponent } from './Components/tenants/tenants.component';
import { HomeComponent } from './home.component';
import { MyPropertiesComponent } from './Components/my-properties/my-properties.component';
import { UnitsComponent } from './Components/units/units.component';
import { NotificationsComponent } from './Components/notifications/notifications.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
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
