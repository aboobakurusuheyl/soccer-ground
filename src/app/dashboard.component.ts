import { Component, OnInit } from '@angular/core';

import { player }        from './player';
import { playerService } from './player.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  players: player[] = [];

  constructor(private playerService: playerService) { }

  ngOnInit(): void {
    this.playerService.getplayers()
      .then(players => this.players = players.slice(0, 4));
  }
}
