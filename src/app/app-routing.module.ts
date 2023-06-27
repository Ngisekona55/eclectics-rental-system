import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'owner', loadChildren: () => import('./Modules/owner/owner.module').then(m => m.OwnerModule)},
  {path: 'agents', loadChildren: () => import('./Modules/agent/agent.module').then(m => m.AgentModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 