import { range, asyncScheduler } from 'rxjs';

// Crea un Observable que emite 5 valores partiendo de 1.
// Con el uso de asyncScheduler transformamos la funcion range
// en asincrona.
const src$ = range(1, 5, asyncScheduler);

console.log('Inicio');
src$.subscribe(console.log);
console.log('Fin');