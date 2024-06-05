import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FilterByDatePipe } from '../filter-by-date.pipe';

@Component({
  selector: 'app-airlines-list',
  standalone: true,
  imports: [CommonModule,FilterByDatePipe],
  templateUrl: './airlines-list.component.html',
  styleUrl: './airlines-list.component.css'
})
export class AirlinesListComponent {
@Input()bookingdatasList:any=[];

@Input()searchArrivalDate:any;

@Input()searchDepartureDate:any;

}
