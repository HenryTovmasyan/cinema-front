import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theater-seats',
  templateUrl: './theater-seats.component.html',
  styleUrls: ['./theater-seats.component.css']
})
export class TheaterSeatsComponent implements OnInit {

  public title: string = 'Theater seats';
  public movieDetails: any[] = [{id:0, booked:0, active:0 },
                                {id:1, booked: 1, active:0 },
                                {id:2, booked:0, active:0 },
                                {id:3, booked:0, active:0 },
                                {id:4, booked:0, active:1 },
                                {id:5, booked:0, active:0 },
                                {id:6, booked:0, active:0 },
                                {id:7, booked:0, active:0 },
                                {id:8, booked:0, active:0 },
                                {id:9, booked:0, active:0 }
                                ];
  public  is_picked: any[] = [];
  constructor() { }

  ngOnInit() {
  }
    pickPlace (a, b): void {
    console.log(a, b);
    }
    book (): void {
        console.log('book');
    }
    reset (): void {
        console.log('reset');
    }
}
