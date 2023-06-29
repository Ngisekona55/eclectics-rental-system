import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { OwnerComponent } from './owner.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { MyPropertiesComponent } from './my-properties/components/my-properties/my-properties.component';
import { TenantsComponent } from './tenants/components/tenants/tenants.component';
import { UnitsComponent } from './units/components/units/units.component';
import { NotificationsComponent } from './notifications/components/notifications/notifications.component';
import { IssuesComponent } from './issues/components/issues/issues.component';
import { SettingsComponent } from './settings/components/settings/settings.component';
import { AgentsComponent } from './agents/components/agents/agents.component';

const routes: Routes = [
  {path: 'owner', component: OwnerComponent,
   children: [
    {path: 'sidebar', component: SidebarComponent,
    children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'my-properties', component: MyPropertiesComponent},
    {path: 'agents', component: AgentsComponent},
    {path: 'tenants', component: TenantsComponent},
    {path: 'units', component: UnitsComponent},
    {path: 'notifications', component: NotificationsComponent},
    {path: 'issues', component: IssuesComponent},
    {path: 'settings', component: SettingsComponent},
    {path: '',redirectTo: 'dashboard', pathMatch: 'full'}
    ]}
   ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
