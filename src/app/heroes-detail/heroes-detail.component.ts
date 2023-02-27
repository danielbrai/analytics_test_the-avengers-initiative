import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Hero } from '../models/hero.model';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.css']
})
export class HeroesDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    // private location: Location
  ) {
  }

  private hero: Hero;

  private basePath = '';

  ngOnInit() {
    console.log("id")
    this.getHero();
    console.log(this.hero)
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

}
