import { fromEvent } from 'rxjs';

/**
 * Eventos del DOM
 */
const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
    next: val => console.log('next', val)
};

src1$.subscribe(({x, y}) => {
    console.log({coordX: x, coordY: y});
});

src2$.subscribe(evento => {
    console.log(evento.key);
});