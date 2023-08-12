import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent {
  @Input() pokemons:any = new Array(10)
  @Output() emmitSearch:EventEmitter<Array<{name:string, url:string}>> = new EventEmitter()

  constructor() { }

  onSearch(event:Array<{name:string, url:string}>) {
    this.emmitSearch.emit(event)
  }
}
