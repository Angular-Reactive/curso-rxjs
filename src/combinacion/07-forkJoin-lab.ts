import { catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { forkJoin, of } from 'rxjs';
// El uso màs comùn del 'forkJoin' es para realizar peticiones AJAX de manera simultànea.

const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'ernestoacostacuba';

forkJoin({
    usuarios: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`),
    repos: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repos111`).pipe(
        catchError(err => of([]))
    ),
    gists: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists`)
}).pipe(
    catchError(err => of(err.message))
).subscribe(console.log);
