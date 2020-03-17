import { of, interval, fromEvent } from 'rxjs';
import { mergeMap, take, map, takeUntil } from 'rxjs/operators';
// El operador 'mergeMap' es quizás uno de los operadores de transformación 
// que màs cuesta entender còmo funciona y no sin razón alguna, sinceramente.
// Este operador nos permite unificar en un solo Observable dos flujos de datos, 
// haciendo que de dos entradas obtengamos una salida “mergeada”. Además, nos 
// permite controlar la concurrencia de Observables internos que vamos a mantener 
// en ejecución, haciendo de este operador, bien usado, un operador muy potente 
// de control de trabajo y de forma manual.

const letras$ = of('a', 'b', 'c');

letras$.pipe(
    mergeMap((letra) => interval(1000).pipe(
        map(i => letra + i),
        take(3)
    ))
)
// .subscribe({
//     next: val => console.log('next: ', val),
//     complete: () => console.log('Complete')
// });

const mousedown$ = fromEvent(document, 'mousedown');
const mouseup$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mousedown$.pipe(
    mergeMap(() => interval$.pipe(
        takeUntil(mouseup$)
    )
))
.subscribe(console.log);