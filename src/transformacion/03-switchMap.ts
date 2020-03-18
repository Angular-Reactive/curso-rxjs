import { GithubUser } from '../interfaces/github-user.interface';
import { ajax } from 'rxjs/ajax';
import { Observable, fromEvent } from 'rxjs';
import { debounceTime, map, pluck, mergeAll, mergeMap, last, switchMap } from 'rxjs/operators';
import { GithubUsersResp } from '../interfaces/github-users.interface';

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

// El operador 'switchMap' recibe un callback que retorna un Onservable
// Ese nuevo Observable es el que se va a subscribir para hacer la emisiòn
// en la salida.
// El 'switchMap' siempre cancelerà la peticiòn anterior. Es sumamente ùtil
// cuando estamos realizando peticiones AJAX.
// Recuerda que con el 'mergeMap' todas las suscripciones permanecen activas
// hasta que se completen o nosotros completemos dichos Observables.

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


input$.pipe(
    // debounceTime<KeyboardEvent>(500),
    pluck('target', 'value'),
    switchMap(texto => ajax.getJSON(url + texto))
).subscribe(console.log);