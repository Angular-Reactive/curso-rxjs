import { take } from 'rxjs/operators';
import { interval } from 'rxjs';
import { concat } from 'rxjs';
// El 'concat' es una funciòn que recibe
// Observables como argumentos. Tambièn puede
// recibir un Iterable o un arreglo y va a crear
// un nuevo Observable.
// Cuando se complete el Observable actual, el
// siguiente Observable comenzarà a emitir valores.

const interval$ = interval(1000);

concat(interval$.pipe(take(3)), 
    interval$.pipe(take(2)),
    [1,2,3,4])
.subscribe(console.log);