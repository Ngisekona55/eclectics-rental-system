import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { MaterialModule } from 'src/app/Angular-Material/material/material.module';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { MyPropertiesComponent } from './Components/my-properties/my-properties.component';
import { AgentsComponent } from './Components/agents/agents.component';
import { TenantsComponent } from './Components/tenants/tenants.component';
import { UnitsComponent } from './Components/units/units.component';
import { NotificationsComponent } from './Components/notifications/notifications.component';
import { IssuesComponent } from './Components/issues/issues.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { OwnerComponent } from './owner.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';




@NgModule({
  declarations: [
    DashboardComponent,
    MyPropertiesComponent,
    AgentsComponent,
    TenantsComponent,
    UnitsComponent,
    NotificationsComponent,
    IssuesComponent,
    SettingsComponent,
    SidebarComponent,
    OwnerComponent,
    ToolbarComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    OwnerRoutingModule,
    MaterialModule,
    MatSidenavModule
  ],
  exports: [RouterModule, SidebarComponent]
})
export class OwnerModule { }
