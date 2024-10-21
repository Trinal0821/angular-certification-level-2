import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  standalone: true
})
export class DurationPipe implements PipeTransform {

  transform(value: string): string {
    const num = Number(value);
    const hours = Math.floor(num / 60);
    const minutes = num % 60;
    var result = `${hours} h ${minutes != 0 ? minutes + ' mins' : ''}`
    return result;
  }

}