import { mergeMap, switchMap } from 'rxjs/operators';
// El 'mergeMap' mantiene todas las suscripciones 
// internas activas.

import { fromEvent, interval } from 'rxjs';

const clickS = fromEvent(document, 'click');
const interval$ = interval(1000);

clickS.pipe(
    mergeMap(() => interval$)
)
// .subscribe(console.log);


// El 'switchMap' mantiene solo una suscripciòn interna
// activa.

clickS.pipe(
    switchMap(() => interval$)
) .subscribe(console.log);