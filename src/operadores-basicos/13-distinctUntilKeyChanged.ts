import { of, from } from 'rxjs';
import { distinct, distinctUntilChanged, pluck, distinctUntilKeyChanged } from 'rxjs/operators';

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

// distinctUntilKeyChanged estarà pendiente de la propiedad
// que mandemos de un objeto
 from(personajes).pipe(
     distinctUntilKeyChanged( 'nombre') // Especificamos sobre cuàl campo del objeto estaràn pendientes las emisiones
 ).subscribe(console.log);


