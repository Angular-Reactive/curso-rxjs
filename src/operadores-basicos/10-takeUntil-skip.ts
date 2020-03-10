import { interval, fromEvent } from 'rxjs';
import { takeUntil, skip, tap } from 'rxjs/operators';

/**
 * Il takeUntil se traduce en: "Sigue recibiendo
 * los valores y sigue emitièndolos hasta que el
 * segundo Observable emita su primer valor".
 * 
 * El operador skip por otro lado, permite de saltar
 * o bien, omitir, x cantidad de emisiones iniciales.
 */
const boton = document.createElement('button');
boton.innerHTML = 'Detener timer';

document.querySelector('body').append(boton);

const counter$ = interval(1000);
// const clickBtn$ = fromEvent(boton, 'click');
const clickBtn$ = fromEvent(boton, 'click').pipe(
    tap(() => console.log('tap antes de skip')),
    skip(1),
    tap(() => console.log('tap despuès de skip'))
);

counter$.pipe(
    takeUntil(clickBtn$)
)
.subscribe({
    next: (val) => console.log('next: ', val),
    complete: ()=> console.log('Complete')
});