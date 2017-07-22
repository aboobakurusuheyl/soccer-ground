import { Component }          from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div style="text-align: center">
    <p class="pic" style><img src="/images/logo.png" /></p>
    </div>
    <div id="nav" class="topnav">
      <a routerLink="/dashboard" routerLinkActive="active">Top Players</a>
      <a routerLink="/players" routerLinkActive="active">Players</a>
      <a style="text-align: center"><player-search></player-search></a>
    </div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Soccer Ground';
}
// alined all the content center and put the search in nav bar