import { Component, OnInit } from '@angular/core';
import {forEach} from "@angular/router/src/utils/collection";

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
    pickPlace(value, key): void {
        const id = value.id;
        let data = this.movieDetails[key];
        console.log(data);
        if (data) {
            if (data.booked === 0 && data.active === 0 && !this.is_picked.includes(id)) {
                this.is_picked.push(id);
                this.bronPlace(key);
            }
            else {
                if (data.booked === 0 && data.active === 1 && this.is_picked.includes(id)) {
                    let ind = this.is_picked.indexOf(id);
                    this.is_picked.splice(ind, 1);
                    this.removeBron(key);
                } else {
                    alert('someone wants to bron this place');
                }
            }
        }
    }
    bronPlace(key): void {
        this.movieDetails[key].active = 1;
    }
    removeBron(key): void {
        this.movieDetails[key].active = 0;
    }
    book (): void {
        console.log('book');
    }
    reset (): void {
        var that = this;
        this.is_picked.forEach(function(val) {
            that.movieDetails[val].active = 0;
        });
        this.is_picked = [];
    }
}
