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

//  const source$ = from([1, 2, 3, 4, 5]);
//  const source$ = of(...[1, 2, 3, 4, 5]);
// const source$ = from('Fernando');

const source$ = from( fetch('https://api.github.com/users/klerith'));

// source$.subscribe( async(resp) => {

//     console.log(resp);

//     const dataResp = await resp.json();

//     console.log(dataResp);
// });

//  source$.subscribe(observer);