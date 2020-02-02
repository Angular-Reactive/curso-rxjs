import { Observable, Observer, Subject } from 'rxjs';


const observer: Observer<string> = {
    next: value => console.log('[next]: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('complete [obs]')
}

const intervalo$ = new Observable<number>( subs => {

    const intervalID = setInterval(
        () => subs.next(Math.random()),
    3000);

    return () => clearInterval(intervalID);
});

/**
 * Las tres caracteristicas principales del Subject son:
 * 1- Casteo multiple (multicasting)
 * 2- Tambien es un Observer
 * 3- Contiene los metodos next(), error() y complete().
 */
const subject$ = new Subject<number>();
intervalo$.subscribe(subject$);

// const subs1 = intervalo$.subscribe();
// const subs2 = intervalo$.subscribe();

const subs1 = subject$.subscribe(rnd => console.log('subs1', rnd));
const subs2 = subject$.subscribe(rnd => console.log('subs2', rnd));