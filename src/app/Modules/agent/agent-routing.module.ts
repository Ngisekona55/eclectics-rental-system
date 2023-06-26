import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { TenantsComponent } from './Components/tenants/tenants.component';
import { HomeComponent } from './home.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent,
   children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'tenants', component: TenantsComponent}
   ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentRoutingModule { }
