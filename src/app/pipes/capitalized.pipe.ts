import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalized'
})
export class CapitalizedPipe implements PipeTransform {

  transform(value: string, all: boolean = true): string {
    value = value.toLocaleLowerCase();
    let nombres = value.split(' ');
    if (all){
      nombres = nombres.map( nombre => {
        return nombre[0].toLocaleUpperCase() + nombre.substr(1);
      })
    }else{
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }
    return nombres.join(' ');
  }

}
