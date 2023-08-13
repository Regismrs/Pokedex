import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent implements OnInit{
    @Output() public emmitSearch:EventEmitter<Array<{name: string, url:string}>> = new EventEmitter()
    public pokemonsListNames:Array<any> = []
    public pokemonsFiltered:Array<{name:string, url:string}> = []
    private lastKeywordSearched:string = ""

    ngOnInit() {
      if (this.pokemonsListNames.length && localStorage.getItem("PokemonsListNamesUrls") !== null) {
        const jso = localStorage.getItem("PokemonsListNamesUrls") || ''
        this.pokemonsListNames = JSON.parse(jso).sort(
          (a:any, b:any) => (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0)
        console.info("TOTAL: " + this.pokemonsListNames.length)
      }
    }

    filterNames(keyword:string):void {
      this.pokemonsFiltered = this.pokemonsListNames.filter(p => p.name.indexOf(keyword.toLowerCase()) !== -1)
      console.log(this.pokemonsFiltered)
    }

    search(keyword:string):void {
      if (keyword !== this.lastKeywordSearched) {
        this.lastKeywordSearched = keyword
        this.emmitSearch.emit(this.pokemonsFiltered)
      }
    }
}
