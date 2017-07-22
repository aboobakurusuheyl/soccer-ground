import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { playerSearchService } from './player-search.service';
import { player } from './player';

@Component({
  selector: 'player-search',
  templateUrl: './player-search.component.html',
  styleUrls: [ './player-search.component.css' ],
  providers: [playerSearchService]
})
export class playerSearchComponent implements OnInit {
  players: Observable<player[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private playerSearchService: playerSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.players = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.playerSearchService.search(term)
        // or the observable of empty players if there was no search term
        : Observable.of<player[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<player[]>([]);
      });
  }

  gotoDetail(player: player): void {
    let link = ['/detail', player.id];
    this.router.navigate(link);
  }
}
