import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { MaterialModule } from 'src/app/Angular-Material/material/material.module';
import { AgentModule } from '../agent/agent.module';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { MyPropertiesComponent } from './my-properties/components/my-properties/my-properties.component';
import { TenantsComponent } from './tenants/components/tenants/tenants.component';
import { UnitsComponent } from './units/components/units/units.component';
import { NotificationsComponent } from './notifications/components/notifications/notifications.component';
import { IssuesComponent } from './issues/components/issues/issues.component';
import { SettingsComponent } from './settings/components/settings/settings.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { OwnerComponent } from './owner.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AgentsComponent } from './agents/components/agents/agents.component';




@NgModule({
  declarations: [
    DashboardComponent,
    MyPropertiesComponent,
    TenantsComponent,
    AgentsComponent,
    UnitsComponent,
    NotificationsComponent,
    IssuesComponent,
    SettingsComponent,
    SidebarComponent,
    OwnerComponent,


  ],
  imports: [
    CommonModule,
    RouterModule,
    OwnerRoutingModule,
    MaterialModule,
    AgentModule
  ],
  exports: [RouterModule, SidebarComponent]
})
export class OwnerModule { }
