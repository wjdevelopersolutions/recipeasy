import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'searchbar'
})
export class SearchbarPipe implements PipeTransform {

    transform( value: any[], ...args: any ) {
        

        let valueReturned = [];
        const termino = args[0].toLowerCase();
        
        value.forEach( data => {
          if (data.name.indexOf(termino) >= 0) {
            valueReturned.push(data);
          }
        });
        
        return valueReturned;
    }
}  