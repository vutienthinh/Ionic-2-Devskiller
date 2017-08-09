import { Injectable, Pipe } from '@angular/core';

/*
  Generated class for the Reverse pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'meangender'
})
@Injectable()
export class MeaningGender {
  /*
    Takes a value and makes it lowercase.
   */
   transform(value) {
     return 'Your gender is' + value ;
   }
}
