import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {
  private readonly API = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPokemons(limit: number, offset: number): Observable<any> {

    let params = new HttpParams()
                 .set('?limit', limit)
                 .set('?offset', offset - 20)

    return this.http.get(`${this.API}pokemon/${ params}`);
  }

  getPokemonDetails(path: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(path);
  }

  getPokemonByName(search: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.API}pokemon/${search}`);
  }

  getTypes(): Observable<any> {
    return this.http.get(this.API + "type");
  }

}
