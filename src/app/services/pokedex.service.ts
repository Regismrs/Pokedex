import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { forkJoin, Observable } from 'rxjs';
import { map, scan, expand, takeWhile, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private apiurl:string = "https://pokeapi.co/api/v2/"

  constructor(private http: HttpClient) { }

  getPokemonsListFiltered(urls:Array<{name:string, url:string}>):Observable<any> {
    const observables:Observable<any>[] = []
    for (const obj of urls) {
      const detailedInfo = this.http.get<any>(obj.url).pipe(
        map((response) => ({...obj, status: response}))
      )
      observables.push(detailedInfo)
    }

    return forkJoin(observables)
  }

  getPokemon(url:string):Observable<any> {
    return this.http.get<any>(url)
  }

  getPokemonDetails(id:number):Observable<any> {
    const pokemon = `${this.apiurl}pokemon/${id}`
    const name = `${this.apiurl}pokemon-species/${id}`

    return forkJoin([
      this.getPokemon(pokemon), 
      this.getPokemon(name)
    ])
  }

  getPokemonsListNamesRecursive(page:string = ''):Observable<any> {
    if (!page) page = `${this.apiurl}pokemon/?offset=0&limit=151`
    return this.http.get<any>(page)
  }
  
  getPokemonsListNamesRecursive(page:string = ''):Observable<any> {
    if (!page) page = `${this.apiurl}pokemon/?offset=0&limit=100`
    return this.http.get<any>(page).pipe(
      expand(response => this.http.get<any>(response.next)),
      takeWhile(res => res.next, true),
      scan((acc, r) => acc.concat(...r.results), [])
    )
  }
}
