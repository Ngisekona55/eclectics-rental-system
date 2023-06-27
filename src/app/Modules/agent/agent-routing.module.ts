import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { TenantsComponent } from './Components/tenants/tenants.component';
import { HomeComponent } from './home.component';
import { MyPropertiesComponent } from './Components/my-properties/my-properties.component';
import { UnitsComponent } from './Components/units/units.component';
import { NotificationsComponent } from './Components/notifications/notifications.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { SidenavComponent } from './Components/sidenav/sidenav.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent,
   children: [
    {path: 'sidenav', component: SidenavComponent },
    {path: 'dashboard', component: DashboardComponent},
    {path: 'my-properties', component: MyPropertiesComponent},
    {path: 'tenants', component: TenantsComponent},
    {path: 'units', component: UnitsComponent},
    {path: 'notifications', component: NotificationsComponent},
    {path: 'settings', component: SettingsComponent}
   ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentRoutingModule { }
