import { Observable } from 'rxjs';

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

// Imprimir los datos recibidos en consola
obs$.subscribe( console.log);