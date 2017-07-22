import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { player } from './player';

@Injectable()
export class playerService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private playersUrl = 'api/players';  // URL to web api

  constructor(private http: Http) { }

  getplayers(): Promise<player[]> {
    return this.http.get(this.playersUrl)
               .toPromise()
               .then(response => response.json().data as player[])
               .catch(this.handleError);
  }


  getplayer(id: number): Promise<player> {
    const url = `${this.playersUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as player)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.playersUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<player> {
    return this.http
      .post(this.playersUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as player)
      .catch(this.handleError);
  }

  update(player: player): Promise<player> {
    const url = `${this.playersUrl}/${player.id}`;
    return this.http
      .put(url, JSON.stringify(player), {headers: this.headers})
      .toPromise()
      .then(() => player)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

