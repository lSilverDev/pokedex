import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {
  private readonly API = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<any> {
    return this.http.get(this.API + "pokemon/");
  }

  getTypes(): Observable<any> {
    return this.http.get(this.API + "type");
  }

}
