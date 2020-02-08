import { range, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

// range(1,5)
// .pipe(
//     map<number, number>(valor => valor * 10)
// )
// .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyUpCode$ = keyup$.pipe(
    map(event => event.code)
);

keyUpCode$.subscribe(val => console.log('map', val));