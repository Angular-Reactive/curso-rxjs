import {defer, from } from 'rxjs';
import { map, last } from 'rxjs/operators';

const url = 'https://api.github.com/useXXXrs?per_page=5';

// Fetch API
const fetchPromesa = fetch(url);

fetchPromesa
.then( resp => resp.json())
.then(data => console.log('data: ', data))
.catch(err => console.warn('error en usuarios: ', err))

// Para convertir una Promise en un Observable, 
// basta con crear una funciòn wrapper para la
// funciòn fetch, usando el operador 'from' de RjJS
// y sustituyendo '.then(...)' con 'map(...)'
// function getUsers() {
//     return from(fetch(url)).pipe(
//         map(response => response.json()));
// }

// getUsers().subscribe(console.log);
