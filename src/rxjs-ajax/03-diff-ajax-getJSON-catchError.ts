import { catchError } from 'rxjs/operators';
import { ajax, AjaxError } from 'rxjs/ajax';
import { of } from 'rxjs';

const url = 'https://httpbxxin.org/delay/1';
const url1 = 'https://api.github.com/users?per_page=5';

const manejaError = (resp: AjaxError) => {
    console.warn('Error: ', resp.message);
    return of({
        ok: false,
        usuarios: []
    })
}
const obs$ = ajax.getJSON(url);

const obs2$ = ajax(url);

// obs$.pipe(
//     catchError(manejaError)
// ).subscribe(data => console.log('getJSON: ', data));

// obs2$.pipe(
//     catchError(manejaError)
// ).subscribe(data => console.log('ajax: ', data));

// Otra manera de manejar los errores

obs$.pipe(
    catchError(manejaError)
).subscribe({
    next: val => console.log('next: ',val),
    error: (err) => console.error('error: ',err),
    complete: () => console.log('Complete')
});
