import { of } from 'rxjs';
import { startWith, endWith } from 'rxjs/operators';
// 'endWith' nos permite hacer una emisiòn antes de que
// el Observable se complete.

const numeros$ = of(1,2,3).pipe(
    startWith('a','b','c'),
    endWith('x','y','z')
);

numeros$.subscribe(console.log);