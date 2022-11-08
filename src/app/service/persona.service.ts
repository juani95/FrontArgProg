import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'https://back-argprograma.herokuapp.com/personas/' ;

  constructor(private http: HttpClient) { }

  public getPersonas(): Observable<persona[]>{  /*Observable: para peticiones asíncronas*/
    return this.http.get<persona[]>(this.URL + 'traer/');
  }

  public getPersona(id: any): Observable<persona>{  /*Observable: para peticiones asíncronas*/
    return this.http.get<persona>(this.URL + 'traer/perfil/' + id); /*traer por id*/
  }
  
}
