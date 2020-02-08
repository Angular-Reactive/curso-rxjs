import { range, fromEvent } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

// range(1,5)
// .pipe(
//     map<number, number>(valor => valor * 10)
// )
// .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyUpCode$ = keyup$.pipe(
    map(event => event.code)
);

const keyUpPluck$ = keyup$.pipe(
    pluck('target', 'baseURI')
);

keyUpCode$.subscribe(val => console.log('map', val));
keyUpPluck$.subscribe(val => console.log('pluck', val));