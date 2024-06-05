import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AirlinesservicesService } from './Services/airlinesservices.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterByDatePipe } from './filter-by-date.pipe';
import { AirlinesListComponent } from './airlines-list/airlines-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    FilterByDatePipe,
    AirlinesListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private airlineservice: AirlinesservicesService) {}
  title = 'FiatPe Assignment';

  searchArrivalDate!: Date;
  searchDepartureDate!: Date;
  setAscending: boolean = false;
  sortButton: string = 'Sort Price';
  bookingdatasList: any = [];

  ngOnInit() {
    this.getBookingsData();
  }

  getBookingsData() {
    this.airlineservice.getBookings().subscribe((data: any) => {
      this.bookingdatasList = data;
    });
  }

  searchByDestination(val: any) {
    if (val.target.value != '') {
      let searchvalue = val.target.value.toLowerCase();
      this.bookingdatasList = this.bookingdatasList.filter((item: any) => {
        return item.destination.toLowerCase().includes(searchvalue);
      });
    } else {
      this.getBookingsData();
    }
  }

  desc() {
    return this.bookingdatasList.sort((a: any, b: any) => {
      let x = a.price;
      let y = b.price;
      if (x > y) {
        return '-1';
      } else {
        return 1;
      }
    });
  }

  switchButton() {
    if (this.setAscending) {
      this.ascend();
      this.sortButton = 'Ascending';
    } else {
      this.desc();
      this.sortButton = 'Descending';
    }
    this.setAscending = !this.setAscending;
  }

  ascend() {
    return this.bookingdatasList.sort((a: any, b: any) => {
      let x = a.price;
      let y = b.price;
      if (x < y) {
        return '-1';
      } else {
        return 1;
      }
    });
  }

  search(val: any) {
    if (val.target.value != '') {
      let searchvalue = val.target.value.toLowerCase();
      this.bookingdatasList = this.bookingdatasList.filter((item: any) => {
        return (
          item.origin.toLowerCase().includes(searchvalue) ||
          item.airline.toLowerCase().includes(searchvalue) ||
          item.aircraft.toLowerCase().includes(searchvalue)
        );
      });
    } else {
      this.getBookingsData();
    }
  }
}
