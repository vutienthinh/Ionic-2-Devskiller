import { Injectable, Pipe, PipeTransform} from '@angular/core';

/*
  Generated class for the KeysPipe pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'keys'
})
@Injectable()
export class KeysPipe implements PipeTransform {
  
  transform(value, args:string[]) : any {
    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }
}