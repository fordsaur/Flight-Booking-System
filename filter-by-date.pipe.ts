import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByDate',
  standalone: true,
})
export class FilterByDatePipe implements PipeTransform {
  transform(value: any, arrivalDate: any, departureDate: any): any {
    let resulArray = '';
    if (!value || !arrivalDate || !departureDate) {
      return value;
    }
    resulArray = value.filter((item: any) => {
      let datearrived = new Date(item.arrivalTime).toISOString().split('T')[0];
      let datedeparture = new Date(item.departureTime)
        .toISOString()
        .split('T')[0];
      return datearrived >= arrivalDate && datedeparture <= departureDate;
    });
    return resulArray;
  }
}
