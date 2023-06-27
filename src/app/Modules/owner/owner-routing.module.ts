import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { OwnerComponent } from './owner.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { MyPropertiesComponent } from './Components/my-properties/my-properties.component';
import { AgentsComponent } from './Components/agents/agents.component';
import { TenantsComponent } from './Components/tenants/tenants.component';
import { UnitsComponent } from './Components/units/units.component';
import { NotificationsComponent } from './Components/notifications/notifications.component';
import { IssuesComponent } from './Components/issues/issues.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';

const routes: Routes = [
  {path: 'owner', component: OwnerComponent,
   children: [
    {path: 'toolbar', component: ToolbarComponent},
    {path: 'sidebar', component: SidebarComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'my-properties', component: MyPropertiesComponent},
    {path: 'agents', component: AgentsComponent},
    {path: 'tenants', component: TenantsComponent},
    {path: 'units', component: UnitsComponent},
    {path: 'notifications', component: NotificationsComponent},
    {path: 'issues', component: IssuesComponent},
    {path: 'settings', component: SettingsComponent}
   ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
