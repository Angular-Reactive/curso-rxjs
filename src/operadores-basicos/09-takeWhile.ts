import { fromEvent } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';

/**
 * El operador takeWhile permite recibir valores
 * mientras la condiciòn se cumpla.
 * Ej:
 * 
 * takeWhile(x => x < 4)
 * 
 * En caso de que quisieramos saber cuàl fue el
 * ùltimo valor vàlido para la condiciòn, el operador 
 * takeWhile toma otro paràmetro booleano llamado "inclusive"
 * que por defecto es falso, pero si lo ponemos a true,
 * si queremos recibir el ùltimo valor que hizo que se  
 * completara el Observable.
 */

 const click$ = fromEvent<MouseEvent>(document, 'click');

 click$.pipe(
     tap(console.log),
     map(({x, y}) => ({x, y})),
    //  takeWhile(({ y }) => y <= 150)
    takeWhile(({ y }) => y <= 150, true)
 )
 .subscribe({
     next: val => console.log('next: ', val),
     complete: () => console.log('Complete')
 });



