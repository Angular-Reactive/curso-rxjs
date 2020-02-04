import { interval, timer } from 'rxjs';

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
}

const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

const interval$ = interval(1000);
// const timer$ = timer(2000);

// Crea un interval que inicia despues de 2 segundos 
// y emitira' valores cada segundo
// const timer$ = timer(2000, 1000);

const timer$ = timer(hoyEn5);



console.log('Inicio');
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('Fin');