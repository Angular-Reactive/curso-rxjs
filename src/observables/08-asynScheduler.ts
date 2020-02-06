import { asyncScheduler } from 'rxjs';

// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

/**
 * Ejemplos de configuracion de setTimeout() usando
 * asyncScheduler.
 */
const saludar = () => console.log('Hola Mundo');
// const saludar2 = (nombre) => console.log(`Hola ${nombre}`);
const saludar3 = ({nombre, apellidos}) => console.log(`Hola ${nombre} ${apellidos}`);

// asyncScheduler.schedule(saludar, 2000);
// asyncScheduler.schedule(saludar2, 2000, 'Ernesto');
// asyncScheduler.schedule(saludar3, 2000, {nombre: 'Ernesto Antonio', apellidos: 'Rodriguez Acosta'});


/**
 * Ejemplos de configuracion de setInterval() usando
 * asyncScheduler.
 * En este caso, la funcion que paso a asyncScheduler
 * no puede ser una funcion lambda. Tiene que ser una funcion
 * normal, en la cual se pasa el state.
 */

 const subs = asyncScheduler.schedule(function(state) {

    console.log(state);
    this.schedule(state + 1, 1000);
 }, 3000, 0);

//  setTimeout(() => {
//      subs.unsubscribe();
//  }, 6000);

 asyncScheduler.schedule(() => subs.unsubscribe(), 6000);
