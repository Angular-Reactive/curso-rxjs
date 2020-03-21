// 'combineLatest' es una funciòn que nos permite
// mandar Observables como argumentos, combinarlos
// y emitir los valores de todos los Observables 
// internos simultàneamente.
// Es importante recalcar que el 'combineLatest'
// regresa un nuevo Observable, el cual va a emitir
// valores hasta que todos los Observables internos
// hayan emitido por lo menos un valor.

import { fromEvent, combineLatest } from 'rxjs';
import { pluck } from 'rxjs/operators';

// const keyup$ = fromEvent(document, 'keyup');
// const click$ = fromEvent(document, 'click');

// combineLatest(keyup$.pipe(pluck('type')), 
//     click$.pipe(pluck('type')))
// .subscribe(console.log);

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@gmail.com';

input2.placeholder = '********';
input2.type = 'password';

document.querySelector('body').append(input1, input2);

// Helpers
const getInputStream = (elem: HTMLElement) => 
    fromEvent(elem, 'keyup').pipe(
        pluck('target', 'value')
    );

combineLatest(getInputStream(input1),
              getInputStream(input2))
.subscribe(console.log);             