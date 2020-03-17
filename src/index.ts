import { GithubUser } from './interfaces/github-user.interface';
import { ajax } from 'rxjs/ajax';
import { Observable, fromEvent } from 'rxjs';
import { debounceTime, map, pluck, mergeAll, mergeMap } from 'rxjs/operators';
import { GithubUsersResp } from './interfaces/github-users.interface';

// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

// Helpers
const mostrarUsuarios = (usuarios: GithubUser[]) => {
    orderList.innerHTML = '';

    for (const usuario of usuarios) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const anchor = document.createElement('a');

        img.src = usuario.avatar_url;
        anchor.href = usuario.html_url;
        anchor.text = 'Ver pàgina';
        anchor.target = '_blank';

        li.append(img);
        li.append(' ' + usuario.login + ' ');
        li.append(anchor);

        orderList.append(li);
    }
}

// El operador 'mergeAll' sirve para trabajar con Observables
// que internamente retornan Observables.
// Hasta que todos los Observables hijos del 'mergeAll' no se completen
// no se a a disparar el complete de la subscripciòn inicial.
// Este procedimiento de unificar Observables en una sola salida, se conoce
// como 'Flattening Operator' o 'Operador de aplanamiento'.

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent, string>('target', 'value'),
    mergeMap<string, Observable<GithubUsersResp>>(texto => ajax.getJSON(
            `https://api.github.com/search/users?q=${texto}`)
    ),
    pluck<GithubUsersResp, GithubUser[]>('items')
);
// .subscribe(mostrarUsuarios);

const url = 'https://httpbin.org/delay/1?arg=';

// El mergeMap se subscribe a cuantos Observables reciba
input$.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck('target', 'value'),
    mergeMap(texto => ajax.getJSON(url + texto))
).subscribe(console.log);