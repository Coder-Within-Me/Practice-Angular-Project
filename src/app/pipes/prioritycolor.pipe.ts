import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prioritycolor'
})
export class PrioritycolorPipe implements PipeTransform {
  color : string = 'red';
  transform(value: unknown, ...args: unknown[]): unknown {
    return this.color = 'green';
  }

}
