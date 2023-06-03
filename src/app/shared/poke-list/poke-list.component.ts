import { Component, Input } from '@angular/core';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent {
  @Input() pokemons:any = new Array(10)

  constructor() { }


}
