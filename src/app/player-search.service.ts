import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { player }           from './player';

@Injectable()
export class playerSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<player[]> {
    return this.http
               .get(`api/players/?name=${term}`)
               .map(response => response.json().data as player[]);
  }
}
