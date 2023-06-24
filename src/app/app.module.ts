import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AgentRoutingModule } from './Modules/agent/agent-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/Agent-components/home/home.component';
import { DashboardComponent } from './Components/Agent-components/dashboard/dashboard.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgentRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
