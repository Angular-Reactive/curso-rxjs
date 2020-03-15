import { asyncScheduler } from 'rxjs';

// El operador 'throttleTime' emite un valor desde el Observable, 
// luego ignora los valores posteriores emitidos durante el intervalo
// especificado, luego repite este proceso.
import { distinctUntilChanged, throttleTime } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { pluck } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    throttleTime(3000)
)
// .subscribe(evento => console.log(evento));

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

// const input$ = fromEvent(input, 'keyup').pipe(
//     throttleTime(1000),
//     pluck('target', 'value'),
//     distinctUntilChanged()
// )
// .subscribe(console.log);

// Podemos configurar el throttleTime para que me
// devuelva el primero y el ùltimo valor emitido
// desde el Observable. Esto se hace con el utilizo
// de un Scheduler y una configuraciòn.

const input$ = fromEvent(input, 'keyup').pipe(
    throttleTime(1000, asyncScheduler, {
        leading: true,  // Primer elemento
        trailing: true  // Ultimo elemento
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
)
.subscribe(console.log);