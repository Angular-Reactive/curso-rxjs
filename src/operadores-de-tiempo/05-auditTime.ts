// Este operador emite el ùltimo valor que ha sido
// emitido por el Observable en un perìodo de tiempo
// determinado.

import { fromEvent } from 'rxjs';
import { auditTime, tap, map } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({x, y}) => ({x, y})),
    tap(val => console.log('tap: ', val)),
    auditTime(2000)
)
.subscribe(evento => console.log(evento));