import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AgentRoutingModule } from './Modules/agent/agent-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Angular-Material/material/material.module';
import { AgentModule } from './Modules/agent/agent.module';
import { OwnerModule } from './Modules/owner/owner.module';
import { OwnerRoutingModule } from './Modules/owner/owner-routing.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgentModule,
    AgentRoutingModule,
    OwnerModule,
    OwnerRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
