import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokedexService } from 'src/app/services/pokedex.service';

import { expand, scan, map, takeWhile} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public pokemons:any = []
  public pokemonsFilteredDataList:any = []
  public limit:number = 6
  public resultsCount = 0

  constructor(private pokeService: PokedexService) { }

  ngOnInit() {
    this.getAllPokemonsBasicInfo()
  }

  getAllPokemonsBasicInfo() {
    this.pokeService.getPokemonsListNames().subscribe({
      next: r => {
        localStorage.setItem("PokemonsListNamesUrls", JSON.stringify(r))
        this.pokemonsFilteredDataList = r
        this.resultsCount = r.length
        this.onChangePage({page: 1, limit: 6, offset: 0})
      },
      error: (e) => console.warn(e)    
    })
  }

  onSearch(event:Array<{name:string, url:string}>) {
    // Atualiza a quantidade de resultados para o paginador
    this.resultsCount = event.length

    // Manda uma fatia pro service recupera e põe em pokemons
    this.pokemonsFilteredDataList = event
    this.pokemons = [].concat(this.pokemonsFilteredDataList.slice(0, Math.min(this.limit, event.length)))
    this.pokeService.getPokemonsListFiltered(this.pokemons)
      .subscribe({
        next: (r) => this.pokemons = r,
        error: (e) => console.warn("ERRO RESEARCH: " + e) 
      })
  }

  onChangePage(event:{page:number, limit:number, offset:number}):void {
    this.limit = event.limit
    this.pokemons = [].concat(this.pokemonsFilteredDataList.slice(event.offset, event.offset  + this.limit))
    this.pokeService.getPokemonsListFiltered(this.pokemons)
      .subscribe({
        next: (r) => this.pokemons = r,
        error: (e) => console.warn("ERRO RESEARCH: " + e) 
      })
  }

}
