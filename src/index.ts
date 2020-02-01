import { Observable, Observer } from 'rxjs';


const observer: Observer<string> = {
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.error('error [obs]: ', error),
    complete: () => console.info('complete [obs]')
}

// Para crear Observables hay diversas formas:

// 1) Usando el metodo estatico create(). Es poco comun.
// const obs$ = Observable.create();

const obs$ = new Observable<string>(subs => {
    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    subs.complete();

    subs.next('Hola');
    subs.next('Mundo');
});

// 2) Segunda forma
// obs$.subscribe(
//     valor => console.log('next: ', valor), 
//     error => console.warn('error: ', error),
//     () => console.info('complete')
// );

// 3) A traves del Observer
obs$.subscribe(observer);
