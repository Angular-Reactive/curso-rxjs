import { take, delay } from 'rxjs/operators';
import { of, interval, forkJoin } from 'rxjs';
// El 'forkJoin' es una funciòn puede recibir varios Observables
// como argumentos. Estos Observables TIENEN QUE
// SER FINITOS.
// El 'forkJoin' va a retornar los valores de cada
// uno de los Observables cuando se completen.
// El resultado que emitirìa serian los ùltimos valores de los
// Observables como un arreglo, que con una pequena
// configuraciòn, se puede transformar en un objeto.

const numeros$ = of(1,2,3,4);
const intervalo$ = interval(1000).pipe(take(3))
const letras$ = of('a','b','c').pipe(delay(3500));

// forkJoin(
//     numeros$,
//     intervalo$,
//     letras$
// ).subscribe(console.log);

// forkJoin(
//     numeros$,
//     intervalo$,
//     letras$
// ).subscribe(resp => {
//     console.log('numeros', resp[0]);
//     console.log('intervalo ', resp[1]);
//     console.log('letras', resp[2]);
// });

// forkJoin({
//     numeros$,
//     intervalo$,
//     letras$
// }).subscribe(resp => console.log(resp));

forkJoin({
    num: numeros$,
    int: intervalo$,
    let: letras$
}).subscribe(resp => console.log(resp));