import { take, switchMap, concatMap } from 'rxjs/operators';
import { Observable, interval, fromEvent } from 'rxjs';
// El 'concatMap' sirve para encatenar los Observables
// resultantes que pueden fluir a travès de ese operador.
// Si mientras està suscripto a un Observable interno, entra
// otro Observable, este ùltimo lo pone en cola hasta que el 
// Observable precedente no se complete.

const interval$ = interval(500).pipe(take(3));

const click$ = fromEvent(document, 'click');

click$.pipe(
    concatMap(()=> interval$)
).subscribe(console.log);