import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { TenantsComponent } from './tenants/components/tenants/tenants.component';
import { HomeComponent } from './home.component';
import { MyPropertiesComponent } from './my-properties/components/my-properties/my-properties.component';
import { UnitsComponent } from './units/components/units/units.component';
import { NotificationsComponent } from './notifications/components/notifications/notifications.component';
import { SettingsComponent } from './settings/components/settings/settings.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent,
   children: [
    {path: 'sidenav', component: SidenavComponent,
    children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'my-properties', component: MyPropertiesComponent},
    {path: 'tenants', component: TenantsComponent},
    {path: 'units', component: UnitsComponent},
    {path: 'notifications', component: NotificationsComponent},
    {path: 'settings', component: SettingsComponent},
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
    ]}
   ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentRoutingModule { }
