import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs/index';
import {catchError, tap} from 'rxjs/internal/operators';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessagesService} from './messages.service';
import {TheaterSeats} from './theater-seats';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class CinemaService {
    private cinemaUrl = 'http://cinema-test.loc/api';

    constructor(private messageService: MessagesService,
                private http: HttpClient) {
    }

    getSeats(): Observable<TheaterSeats[]> {
        return this.http.get<TheaterSeats[]>(`${this.cinemaUrl}/seats`)
            .pipe(
                tap(heroes => this.log('fetched seats')),
                catchError(this.handleError('getSeats', []))
            );
    }
    getDetail(id): Observable<any> {
        return this.http.get(`${this.cinemaUrl}/getSeat/` + id).pipe(
            tap(deteils => this.log('fetched seat')),
            catchError(this.handleError('getSeat', []))
        );
    }
    bronPlace(detail: TheaterSeats): Observable<TheaterSeats> {
        return this.http.put(`${this.cinemaUrl}/bron`, detail, httpOptions).pipe(
            tap(_ => this.log(`bron detail`)),
            catchError(this.handleError<any>('updateDetail'))
        );
    }
    removeBron(detail: TheaterSeats): Observable<TheaterSeats> {
        return this.http.put(`${this.cinemaUrl}/removeBron`, detail, httpOptions).pipe(
            tap(_ => this.log(`removedBron detail`)),
            catchError(this.handleError<any>('removedBronDetail'))
        );
    }
    bookPlaces(places): Observable<any> {
        return this.http.put(`${this.cinemaUrl}/bookPlaces`, places, httpOptions).pipe(
            tap(_ => this.log(`Booked Places`)),
            catchError(this.handleError<any>('bookedPlaces'))
        );
    }
    resetBron(detail): Observable<any> {
        return this.http.put(`${this.cinemaUrl}/resetBron`, detail, httpOptions).pipe(
            tap(_ => this.log(`resetdBron detail`)),
            catchError(this.handleError<any>('resetBronDetail'))
        );
    }

    /** Log a message with the MessageService */
    private log(message: string) {
        this.messageService.add(`Service: ${message}`);
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
