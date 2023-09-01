import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis',
})
export class EllipsisPipe implements PipeTransform {
  transform(value: string, maxLength: number = 10): string {
    if (value.length > maxLength) {
      return value.substr(0, maxLength) + '...';
    }
    return value;
  }
}
