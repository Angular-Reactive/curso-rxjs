import { interval, fromEvent } from 'rxjs';
import { sample } from 'rxjs/operators';
// El operador 'sample' emite el ùltimo valor
// emitido por el Observable hasta que un otro
// Observable que tenemos dentro del operador 'sample'
// emita un valor.

const interval$ = interval(500);

const click$ = fromEvent<MouseEvent>(document, 'click');

interval$.pipe(
    sample(click$)
).subscribe(console.log);