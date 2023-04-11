import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Pokemon } from '../interface/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {
  private readonly API = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<any> {
    return this.http.get(this.API + "pokemon/");
  }

  getPokemonDetails(path: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(path).pipe(
      tap((retorno) => console.log(retorno)),
    );
  }

  getTypes(): Observable<any> {
    return this.http.get(this.API + "type");
  }

}
