import { of, from } from 'rxjs';
import { distinct } from 'rxjs/operators';
/**
 * El operador "distinct" deja pasar
 * ùnicamente los valores que no han sido
 * previamente emitidos por el Observable.
 */

 const numeros$ = of<number | string>(1, '1', 1, 1, 3, 3, 2, 2, 4, 4, 5, 3, 1, '1');

 numeros$.pipe(
     distinct()
 ).subscribe(val => console.log('valor: ', val));

 interface Personaje  {
     nombre: string;
 }

 const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'X'
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
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    }
 ];

 from(personajes).pipe(
     distinct( p => p.nombre) // Especificamos sobre cuàl campo del objeto estaràn pendientes las emisiones
 ).subscribe(console.log);