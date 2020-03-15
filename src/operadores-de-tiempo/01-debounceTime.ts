import { distinctUntilChanged } from 'rxjs/operators';


// El operador 'debounceTime' trabaja en base a
// intervalos de tiempo. Nos ayuda a que podamos
// contar cuàntas milèsimas de segundo han pasado
// desde la ùltima emisiòn, y si esas milèsimas
// sobrepasan el valor que tenemos entre parèntesis,
// entonces emitirà dicho valor.
// Nos ayudarà a restringir la cantidad de emisiones que
// nuestro Observable inicial està emitiendo.

import { fromEvent, from } from 'rxjs';
import { debounceTime, pluck } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    debounceTime(3000)
)
// .subscribe(evento => console.log(evento));

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup').pipe(
    debounceTime(1000),
    pluck('target', 'value'),
    distinctUntilChanged()
)
.subscribe(console.log);