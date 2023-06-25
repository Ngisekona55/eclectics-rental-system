import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AgentRoutingModule } from './Modules/agent/agent-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/Agent-components/home/home.component';
import { DashboardComponent } from './Components/Agent-components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { MaterialModule } from './Angular-Material/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgentRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
