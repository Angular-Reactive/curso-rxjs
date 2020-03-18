// El operador 'exhaustMap' sustituirá el valor en el stream fuente 
// con una secuencia de valores, devueltos por la función interna. 
// Cuando el stream fuente emite, exhaustMap llamará a la función interna 
// para obtener el stream interno al cual se subscribirà. Una vez que se ha
// subscribido al stream interno, exhaustMap ignorará los valores del stream 
// fuente hasta que se complete el stream interno.
// Sòlo mantiene una subscripciòn activa antes de poder anadir otra subscripciòn
// para que emita los valores.
// Es ùtil cuando tenemos Observables que emiten muchos valores que nosotros podemos
// ignorar.

import { interval, fromEvent } from 'rxjs';
import { take, exhaustMap } from 'rxjs/operators';

const interval$ = interval(500).pipe(take(3));

const click$ = fromEvent(document, 'click');

click$.pipe(
    exhaustMap(()=> interval$)
).subscribe(console.log);