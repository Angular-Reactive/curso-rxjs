import { map, sampleTime } from 'rxjs/operators';

// El operador 'sampleTime' nos permite obtener
// el ùltimo valor emitido en un intervalo de tiempo.
// En el momento en que hagamos una subscripciòn al Observable, 
// 'sampleTime' va a estar emitiendo cuàl fue el ùltimo valor
// emitido, pero si no se emitià ningun valor en el intevalo de
// tiempo especificado, no emite nada.

import { fromEvent } from 'rxjs';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    sampleTime(2000),
    map(({x, y}) => ({x, y}))
).subscribe(console.log);