import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';
const url1 = 'https://api.github.com/users?per_page=5';

// Si deseamos enviar otros Headers, podemos configurarlos
// como un segundo argumento del mètodo getJSON()

const obs$ = ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'mi-token': 'ABC123'
});

obs$.subscribe(data => console.log('data: ', data));