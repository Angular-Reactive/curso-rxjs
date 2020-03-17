import { ajax } from 'rxjs/ajax';
import { fromEvent } from 'rxjs';
import { debounceTime, map, pluck, mergeAll } from 'rxjs/operators';

// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

// El operador 'mergeAll' sirve para trabajar con Observables
// que internamente retornan Observables.
// Hasta que todos los Observables hijos del 'mergeAll' no se completen
// no se a a disparar el complete de la subscripciòn inicial.
// Este procedimiento de unificar Observables en una sola salida, se conoce
// como 'Flattening Operator' o 'Operador de aplanamiento'.

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    debounceTime(500),
    pluck('target', 'value'),
    map(texto => ajax.getJSON(
            `https://api.github.com/search/users?q=${texto}`)
    ),
    mergeAll(),
    pluck('items')
).subscribe(resp => {
    console.log(resp)
});