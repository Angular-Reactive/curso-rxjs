import { ajax } from 'rxjs/ajax';
import { tap, map, mergeMap, pluck, catchError, switchMap, exhaustMap } from 'rxjs/operators';
import { of, fromEvent } from 'rxjs';

// Creando un formulario
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

// Helper
const peticionHttpLogin = (userPass) => 
    ajax.post('https://reqres.in/api/login?delay=1', userPass).pipe(
        pluck('response', 'token'),
        catchError(err => of('xxx'))
    );

// Configuraciones
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Submit';

form.append(inputEmail, inputPass, submitBtn);

document.querySelector('body').append(form);

// Prevenir el refresh cada vez que se clicca el botòn Submit
// Streams

const submitForm$ = fromEvent<Event>(form, 'submit');

submitForm$.pipe(
    tap(evt => evt.preventDefault()),
    map(evt => ({
        email: evt.target[0].value,
        password: evt.target[1].value
    })),
    // mergeMap(peticionHttpLogin)
    // switchMap(peticionHttpLogin)
    exhaustMap(peticionHttpLogin)
).subscribe(token => console.log(token));