import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

// POST
// ajax.post(url, { // body
//     id: 1,
//     nombre: 'Ernesto'
// }, {    // headers
//     'mi-token': 'ABC123'
// }).subscribe(console.log);


// PUT
// ajax.put(url, { // body
//     id: 1,
//     nombre: 'Ernesto'
// }, {    // headers
//     'mi-token': 'ABC123'
// }).subscribe(console.log);

// DELETE
ajax.delete(url, {    // headers
    'mi-token': 'ABC123'
}).subscribe(console.log);