import { Component, OnInit } from '@angular/core';
import { Hero } from './../models/hero.model'
import { HEROES } from './../../assets/mocks/heroes-list.mock'

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  private heroes: Hero[] = HEROES;

  constructor() { }

  ngOnInit() {
  }

}
