import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HEROES } from 'src/assets/mocks/heroes-list.mock';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHero(id: number) {
    const hero = of(HEROES.find(hero => hero.id === id))!;
    return hero;
  }

  getHeros(id: number) {
    const heroes = of(HEROES);
    return heroes;
  }

  constructor() { }
}
