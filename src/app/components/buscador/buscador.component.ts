import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];

  constructor(private activateRoute: ActivatedRoute, private _heroesService: HeroesService) {

  }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      console.log(params['termino']);
      this.heroes = this._heroesService.searchHeroes(params['termino']);
      console.log(this.heroes);

    });
  }

}
