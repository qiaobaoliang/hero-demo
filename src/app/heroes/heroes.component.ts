import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero){
    this.selectedHero = hero;
  }
  constructor(
    private heroService: HeroService
  ) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
