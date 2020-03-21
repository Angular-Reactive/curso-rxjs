import { of } from 'rxjs';
import { startWith } from 'rxjs/operators';
// 'startWith' nos permite hacer una emisiòn antes de que
// el Observable empiece a emitir aunque sea un valor sìncrono.

const numeros$ = of(1,2,3).pipe(
    startWith(0)
);

numeros$.subscribe(console.log);