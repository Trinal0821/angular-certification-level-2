import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'budget',
  standalone: true
})
export class BudgetPipe implements PipeTransform {

  /*
   * Converts the input string into $5 million
  */
  transform(value: string,): string {
    return `$${value} million`;
  }

}
