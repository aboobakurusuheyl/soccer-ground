import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { player }                from './player';
import { playerService }         from './player.service';

@Component({
  selector: 'my-players',
  templateUrl: './players.component.html',
  styleUrls: [ './players.component.css' ]
})
export class playersComponent implements OnInit {
  players: player[];
  selectedplayer: player;

  constructor(
    private playerService: playerService,
    private router: Router) { }

  getplayers(): void {
    this.playerService
        .getplayers()
        .then(players => this.players = players);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.playerService.create(name)
      .then(player => {
        this.players.push(player);
        this.selectedplayer = null;
      });
  }

  delete(player: player): void {
    this.playerService
        .delete(player.id)
        .then(() => {
          this.players = this.players.filter(h => h !== player);
          if (this.selectedplayer === player) { this.selectedplayer = null; }
        });
  }

  ngOnInit(): void {
    this.getplayers();
  }

  onSelect(player: player): void {
    this.selectedplayer = player;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedplayer.id]);
  }
}
