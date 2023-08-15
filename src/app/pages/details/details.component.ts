import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  
  public apiError:boolean = false
  public pokemon:any

  constructor(private activatedRoute:ActivatedRoute, private pokeService:PokedexService) { }

  ngOnInit() {
    this.getPokemon();
  }

  private getPokemon() {
    const id = this.activatedRoute.snapshot.params['id'];

    return this.pokeService.getPokemonDetails(id).subscribe({
      next: response => {
        console.log(response)
        this.pokemon = response
      },
      error: e => this.apiError = true
    })
  }


}

