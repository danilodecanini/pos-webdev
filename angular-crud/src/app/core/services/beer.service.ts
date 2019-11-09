import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Beer } from 'src/app/core/model/beer.model';

/**
 *  Esse é o nosso Service usado para consumir o nosso JSON Server, 
 *  tento todas as operações de CRUD do Modelo da Cerveja
 */

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:3000/beer';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  /**
  *  Método para pegar todas as beers do nosso "Back-end"
  */

  getBeers (): Observable<Beer[]> {
    return this.http.get<Beer[]>(apiUrl)
      .pipe(
        tap(beers => console.log('leu as cervejas')),
        catchError(this.handleError('getBeers', []))
      );
  }

  /**
  *  Método para pegar somente um registro de beer do nosso "Back-end",
  *  passando uma ID
  */

  getBeer(id: number): Observable<Beer> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Beer>(url).pipe(
      tap(_ => console.log(`leu a cerveja: id=${id}`)),
      catchError(this.handleError<Beer>(`getBeer id=${id}`))
    );
  }

  /**
  *  Método para adicionar um registro no nosso "Back-end"
  */

  addBeer (beer): Observable<Beer> {
    return this.http.post<Beer>(apiUrl, beer, httpOptions).pipe(      
        tap((beer: Beer) => console.log(`adicionou a cerveja com w/ id=${beer.id}`)),
      catchError(this.handleError<Beer>('addBeer'))
    );
  }

  /**
  *  Método para atualizar um registro do nosso "Back-end"
  */

  updateBeer(id, beer): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, beer, httpOptions).pipe(
      tap(_ => console.log(`atualiza a cerveja com id=${id}`)),
      catchError(this.handleError<any>('updateBeer'))
    );
  }

  /**
  *  Método para deletar um registro do nosso "Back-end"
  */

  deleteBeer (id): Observable<Beer> {
    const url = `${apiUrl}/delete/${id}`;

    return this.http.delete<Beer>(url, httpOptions).pipe(
      tap(_ => console.log(`remove a cerveja com id=${id}`)),
      catchError(this.handleError<Beer>('deleteBeer'))
    );
  }

  /**
  *  Método para tratar os erros ao realizar alguma operação do nosso "Back-end"
  */

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}