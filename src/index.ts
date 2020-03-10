import { interval, fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

/**
 * Il takeUntil se traduce en: "Sigue recibiendo
 * los valores y sigue emitièndolos hasta que el
 * segundo Observable emita su primer valor".
 */
const boton = document.createElement('button');
boton.innerHTML = 'Detener timer';

document.querySelector('body').append(boton);

const counter$ = interval(1000);
const clickBtn$ = fromEvent(boton, 'click');

counter$.pipe(
    takeUntil(clickBtn$)
)
.subscribe({
    next: (val) => console.log('next: ', val),
    complete: ()=> console.log('Complete')
});