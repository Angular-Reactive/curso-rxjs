import { of } from 'rxjs';
import { take, tap } from 'rxjs/operators';

const numerosS = of(1, 2, 3, 4, 5);

numerosS.pipe(
    tap(t => console.log('tap:', t)),
    take(3)
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete')
});
