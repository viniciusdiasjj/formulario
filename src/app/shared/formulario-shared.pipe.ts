import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formularioShared'
})
export class FormularioSharedPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
