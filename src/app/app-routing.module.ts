import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TheaterSeatsComponent} from './theater-seats/theater-seats.component';

const routes: Routes = [
    {path: '', component: TheaterSeatsComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'},
    ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
