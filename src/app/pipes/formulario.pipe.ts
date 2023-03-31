import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formulario'
})
export class FormularioPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
