import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private apiurl:string = "https://pokeapi.co/api/v2/"

  constructor(private http: HttpClient) { }

  getPokemonsList(offset:number = 0, limit:number = 10):Observable<any> {
    return this.http.get<any>(`${this.apiurl}pokemon/?offset=${offset}&limit=${limit}`).pipe(
      tap (
        res => res
      ),
      tap (
        res => { 
          res.results.map( (resPokemons:any) => {
            this.http.get(resPokemons.url).pipe(
              map((res:any) => res)
            ).subscribe({ next: (res) => resPokemons.status = res})

          })
        }
      )
    )   
  }

  getPokemon(url:string):Observable<any> {
    console.log(url)
    return this.http.get<any>(url)
  }
}
