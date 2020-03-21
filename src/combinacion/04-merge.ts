import { pluck } from 'rxjs/operators';
// El 'merge' es una funciòn que recibe uno o màs
// Observables y el resultado va a ser el producto
// de los Observables combinados simultàneamente.
// Hasta que no se completen los Observables que la
// funciòn recibe, no se dispara el complete de la
// subscripciòn.

import { fromEvent, merge } from 'rxjs';

const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

merge(keyup$.pipe(pluck('type')), 
    click$.pipe(pluck('type')))
.subscribe(console.log);