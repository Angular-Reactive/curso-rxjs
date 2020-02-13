import { map, tap } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum justo eu rutrum vehicula. Integer a neque eu felis iaculis varius vel sed ipsum. Donec orci lacus, tincidunt eget luctus maximus, pretium id quam. Sed ultrices rutrum lacus lobortis convallis. Etiam pellentesque sed nisi tincidunt pretium. Nulla eget finibus risus, quis efficitur odio. Vivamus maximus nisl orci, quis vestibulum massa consequat eu. Mauris ut blandit lorem. Quisque cursus, elit sed auctor dignissim, leo ante blandit augue, sollicitudin egestas ante nunc non erat.
<br/><br/>
Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam erat volutpat. Aenean posuere nisl vitae odio tincidunt, venenatis aliquet massa gravida. Phasellus in fringilla quam, a placerat tellus. Donec tempus nulla a hendrerit aliquam. Maecenas ultricies nibh ipsum, feugiat convallis odio vestibulum non. Etiam semper tempor orci, ac consequat ex mollis quis. Phasellus consectetur neque eget lacus viverra ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla elementum orci ornare nibh gravida, vitae condimentum ligula pellentesque. Ut tortor est, pharetra eget euismod sed, feugiat nec purus. Praesent sit amet velit ut est pretium suscipit. Ut magna nibh, consequat sit amet justo ac, ultricies pharetra felis. Morbi velit ante, finibus sed semper eget, placerat eu elit. Etiam laoreet, enim at vehicula cursus, mi ante fringilla velit, eget finibus lectus est et augue.
<br/><br/>
Maecenas volutpat sagittis leo, eu gravida tortor interdum eu. In at tempus quam, nec vulputate nisl. Pellentesque ipsum ante, aliquam sit amet enim a, lobortis fermentum metus. Nunc eu ornare elit. Phasellus tristique aliquam tellus, nec imperdiet odio efficitur et. Vivamus ut mauris sit amet felis aliquam tincidunt. Integer porttitor convallis mauris, nec vulputate risus accumsan ornare. Aenean sodales blandit tempor. Fusce maximus lobortis est sed interdum. Aliquam sit amet vehicula lorem. Cras vel turpis massa. Praesent imperdiet laoreet mauris, a hendrerit dolor aliquam a.
<br/><br/>
Aenean et nisl vehicula, ultricies ante ut, ornare nunc. Ut finibus orci nec diam finibus pellentesque. Vestibulum faucibus feugiat risus, non blandit risus ornare sit amet. Phasellus tempus augue ex, eget imperdiet libero imperdiet nec. Proin et sagittis nisl. In pellentesque malesuada nisi eu euismod. Aliquam sit amet nisi volutpat, euismod arcu sed, luctus ex. Aenean nunc dui, cursus ut quam id, tristique fringilla risus.
<br/><br/>
Duis vehicula, sem nec euismod aliquet, mi felis dignissim lorem, non condimentum velit eros sit amet tortor. Nam tristique nisl nec mauris ornare bibendum. Quisque semper elit nec ipsum placerat, et pretium eros sagittis. Nunc finibus tincidunt risus, eu mattis magna. Aliquam aliquam lectus eget iaculis molestie. Suspendisse malesuada nibh quis dui porttitor, at dignissim ipsum auctor. Fusce eros nibh, aliquet non bibendum et, consectetur non velit.
`;

const body = document.querySelector('body');
body.append(texto);

// Crear el ProgressBar (un div)
const progressBar = document.createElement('div');

// Anadir una clase CSS al progressBar
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// Funcion que hara el calculo del porcentaje de scroll
const calcularPorcentajeScroll = ( event ) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;   // De esta manera, podemos extraer todas las
                                        // propiedades que necesitamos de este objeto

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

// Streams


// Crear un Observable para el scroll de la pagina HTML
const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log);

// Observable para emitir el porcentaje (ancho) que necesito impostar
// en el progressBar
const progress$ = scroll$.pipe(
    map( calcularPorcentajeScroll),
    tap(console.log)
);

progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
});

