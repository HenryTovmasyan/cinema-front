import {Component, OnInit} from '@angular/core';
import {TheaterSeats} from '../theater-seats';
import {CinemaService} from '../cinema.service';

@Component({
    selector: 'app-theater-seats',
    templateUrl: './theater-seats.component.html',
    styleUrls: ['./theater-seats.component.css']
})
export class TheaterSeatsComponent implements OnInit {

    public title: string = 'Theater seats';
    public status: boolean  = true;
    public seats: TheaterSeats[] = [];
    public is_picked: any[] = [];

    constructor(private cinemaService: CinemaService) {}

    ngOnInit() {
        this.getSeats();
    }

    getSeats() {
        return this.cinemaService.getSeats()
            .subscribe((seats: TheaterSeats[]) => {
                    this.seats = seats;
                },
                err => {
                    console.log('err', err);
                }
            );
    }

    pickPlace(value, key): void {
   if (this.status) {
       const id = value.id;
       this.status = false;
       this.cinemaService.getDetail(id).subscribe((dataDetails: any) => {
           let data = dataDetails;
           if (data) {
               if (data.booked === '0' && data.active === '0' && !this.is_picked.includes(id)) {
                   this.is_picked.push(id);
                   this.cinemaService.bronPlace(data).subscribe((detail: any) => {
                       this.status = true;
                   });
               } else {
                   if (data.booked === '0' && data.active === '1' && this.is_picked.includes(id)) {
                       console.log('picked: ', this.is_picked);
                       let ind = this.is_picked.indexOf(id);
                       this.is_picked.splice(ind, 1);
                       this.cinemaService.removeBron(data).subscribe((detail: any) => {
                           this.status = true;
                       });
                   } else {
                       alert('Someone wants to bron this place');
                       this.seats[key] = data;
                       this.status = true;
                   }
               }
           }
       });
   }
    }

    book(): void {
        if (this.is_picked.length > 0) {
            this.cinemaService.bookPlaces(this.is_picked).subscribe((response: any) => {
                this.is_picked = [];
                this.getSeats();
            },
            err => {
                console.log('err', err);
            });
        }
    }

    reset(): void {
        if (this.is_picked.length > 0) {
            this.cinemaService.resetBron(this.is_picked).subscribe((response: any) => {
                this.is_picked = [];
            },
            err => {
                console.log('err', err);
            });
        }
    }
}
