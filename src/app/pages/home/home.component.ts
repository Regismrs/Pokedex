import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public pokemons:any = []
  public limit:number = 6
  public offset:number = 0

  constructor(private pokeService: PokedexService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe( (queryParams:any) => {
      this.limit = queryParams.limit? queryParams.limit : 6
      this.offset = queryParams.offset? queryParams.offset : 0

      console.info( JSON.stringify({offset: this.offset, limit: this.limit}) )
      this.getAllPokemons()
    })
  }

  ngOnInit() {
    
  }

  getAllPokemons() {
    this.pokeService.getPokemonsList(this.offset, this.limit).subscribe({
      next: (r) => {
        //console.log('Subscriber: ' + JSON.stringify(r))
        this.pokemons = r.results
      },
      error: (e) => console.warn(e)
    })
  }

}
