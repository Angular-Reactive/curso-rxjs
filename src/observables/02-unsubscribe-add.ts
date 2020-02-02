import { Observable, Observer } from 'rxjs';


const observer: Observer<string> = {
    next: value => console.log('[next]: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('complete [obs]')
}

const intervalo$ = new Observable<number>(subscriber => {

    // Crear un contador, 1, 2, 3, 4, 5, ....
    let contador = 0;
    
    const interval = setInterval( () => {
        // Cada segundo
        subscriber.next(contador++);
        console.log(contador);
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    // Sera lo que se ejecutara cuando se llame el metodo subscribe()
    return () => {
        // Limpiar el intervalo
        clearInterval(interval);
        console.log('Intervalo destruido');
    }
});

const subs1 = intervalo$.subscribe();

const subs2 = intervalo$.subscribe();

const subs3 = intervalo$.subscribe();

// Encadenando subscripciones
subs1.add(subs2)
    .add(subs3);

setTimeout( () => {
    subs1.unsubscribe();
    // subs2.unsubscribe();
    // subs3.unsubscribe();

    console.log('Timeout completado');
}, 6000);