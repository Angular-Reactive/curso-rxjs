import { of, from } from 'rxjs';
import { async } from 'rxjs/internal/scheduler/async';


/**
 * of = Toma argumentos y genera una secuencia
 * from = array, promise, iterable, Observable
 */

 const observer = {
     next: val => console.log('next:', val),
     complete: () => console.log('complete')
 };

 // Funcion generadora
 const miGenerador = function*() {
     // yield se utiliza para generar valores
     yield 1;
     yield 2;
     yield 3;
     yield 4;
     yield 5;
 }

 // Asignando la funcion generadora a un Iterable
 const miIterable = miGenerador();

//  const source$ = from([1, 2, 3, 4, 5]);
//  const source$ = of(...[1, 2, 3, 4, 5]);
// const source$ = from('Fernando');

// const source$ = from( fetch('https://api.github.com/users/klerith'));

// source$.subscribe( async(resp) => {

//     console.log(resp);

//     const dataResp = await resp.json();

//     console.log(dataResp);
// });

//  source$.subscribe(observer);

from(miIterable).subscribe(observer);

