import {defer, from, of } from 'rxjs';
import { map, last, catchError } from 'rxjs/operators';
import { ajax, AjaxError } from 'rxjs/ajax';
import * as R from 'ramda';

const url = 'https://api.github.com/users?per_page=5';

const manejaErrores = (response: Response) => {
    if(!response.ok){
        throw new Error(response.statusText)
    }
    return response;
}

const atrapaError = (err: AjaxError) => {
    console.warn('Error en: ', err.message);
    return of([]);
}

// Fetch API
const fetchPromesa = fetch(url);

// fetchPromesa
// .then( resp => resp.json())
// .then(data => console.log('data: ', data))
// .catch(err => console.warn('error en usuarios: ', err))

// fetchPromesa
// .then(manejaErrores)
// .then( resp => resp.json())
// .then(data => console.log('data: ', data))
// .catch(err => console.warn('error en usuarios: ', err))

// Utilizando ajax di RxJS
// El operador 'catchError' sirve para atrapar cualquier error
// que suceda en el Observable.
// Si el Observable emite un error, este operador puede retornar
// un mensaje de error, o retornar otro Observable immediatamente.
// El nuevo Observable puede emitir cualquier valor.

ajax(url).pipe(
    map(resp => resp.response),
    catchError(atrapaError)
).subscribe(users => console.log('Usuarios: ', users));

