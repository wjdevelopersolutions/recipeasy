import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'searchbar'
})
export class SearchbarPipe implements PipeTransform {

    transform( value: any[], ...args: any ) {
        

        let valueReturned = [];
        const termino = String(args[0]).toLowerCase();
        
        value.forEach( (data: {name: string, image: string}) => {

          if (termino === '') {
            return valueReturned = [];
          }

          if (data.name.indexOf(termino) >= 0) {
            if ( data.name.length > 15 ) 
               data.name = `${data.name.slice(0, 15)} ...`;
            valueReturned.push(data);
          } 

        });
        
        return valueReturned;
    }
}  