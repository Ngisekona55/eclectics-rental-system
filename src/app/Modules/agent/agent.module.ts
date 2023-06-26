import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { TenantsComponent } from './Components/tenants/tenants.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    DashboardComponent,
    TenantsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AgentRoutingModule
  ],
  exports: [RouterModule]
})
export class AgentModule { }
