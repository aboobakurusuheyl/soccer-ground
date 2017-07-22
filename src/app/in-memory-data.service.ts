import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const players = [
      { id: 1, image: './images/messi.png', name: 'Messi', team: 'Barcelona', age:'30', goals:'565'},
      { id: 2, image: './images/ronaldo.png', name: 'Ronaldo', team: 'Real Madrid', age:'32', goals:'604' },
      { id: 3, image: './images/bale.png', name: 'Bale', team: 'Real Madrid', age:'28', goals:'128' },
      { id: 4, image: './images/neymar.png', name: 'Neymar', team: 'Barcelona!', age:'24', goals:'126' },
      { id: 5, image: './images/griezmann.png', name: 'Greizeman', team: 'Athletico medrid', age:'29', goals:'98' },
      { id: 6, image: './images/james.png', name: 'James', team: 'Real Madrid', age:'28', goals:'67' },
      { id: 7, image: './images/dimaria.png', name: 'dimaria', team: 'PSG', age:'29', goals:'98' },
      { id: 8, image: './images/vardy.png', name: 'Vardy', team: 'Blancos' , age:'27', goals:'80'},
      { id: 9, image: './images/robben.png', name: 'robben', team: 'Bayern Munich' , age:'32', goals:'201'},
      { id: 10, image: './images/lewandoski.png', name: 'lewandowski', team: 'Bayern Munich', age:'30', goals:'302' }
    ];
    return {players};
  }
}
