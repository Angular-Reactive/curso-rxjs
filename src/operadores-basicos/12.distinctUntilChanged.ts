import { of, from } from 'rxjs';
import { distinct, distinctUntilChanged, pluck } from 'rxjs/operators';
/**
 * El operador "distinct" deja pasar
 * ùnicamente los valores que no han sido
 * previamente emitidos por el Observable.
 */

 const numeros$ = of<number | string>(1, '1', 1, 1, 3, 3, 2, 2, 4, 4, 5, 3, 1, '1');

 numeros$.pipe(
     distinctUntilChanged()
 ).subscribe(val => console.log('valor: ', val));

 interface Personaje  {
     nombre: string;
 }

 const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Dr. Willy'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    }
 ];

 from(personajes).pipe(
     distinctUntilChanged( (ant, act) => ant.nombre === act.nombre) // Especificamos sobre cuàl campo del objeto estaràn pendientes las emisiones
 ).subscribe(console.log);

 // distinctUntilChanged emite valores siempre y cuando
//  la emisiòn anterior no sea la misma.
