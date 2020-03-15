import { of, from } from 'rxjs';
import { distinct, distinctUntilChanged, pluck } from 'rxjs/operators';

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
