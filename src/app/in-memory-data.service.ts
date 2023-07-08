import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
    { id: 12, name: '浩克' },
    { id: 13, name: '奇異博士' },
    { id: 14, name: '鋼鐵人' },
    { id: 15, name: '美國隊長' },
    { id: 16, name: '雷神索爾' },
    { id: 17, name: '蜘蛛人' },
    { id: 18, name: '蟻人' },
    { id: 19, name: '水行俠' },
    { id: 20, name: '洛基' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
