import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  public sidebarVisible = true;

  public toggleSidebar(): void {
    this.sidebarVisible = !this.sidebarVisible;
  }

}
