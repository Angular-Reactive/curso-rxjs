import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const numeros$ = range(1,5);

numeros$.pipe(
    tap( numero => console.log('Antes: ', numero)),
    map(numero => numero * 10),
    tap( {
        next: numero => console.log('Despues: ', numero),
        complete: () => console.log('Se termino todo')
    })
).subscribe(val => console.log('subs', val));