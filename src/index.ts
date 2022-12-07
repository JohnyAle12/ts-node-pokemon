import { Hero as SuperHero } from "./classes/Hero";
import powers, {Power} from "./data/powers";
import { Pokemon } from "./decorators/pokemon";
import { printObject, genericFunction } from "./generics/generics";
import { getPockemon } from "./generics/getPockemon";
// import * as HeroClases from "./classes/Hero";


const ironman = new SuperHero('Iroman', 12, 30);

console.log(ironman);
console.log(ironman.powers);

console.log(powers);



printObject( [1,2,3] );
console.log( genericFunction(123.23).toFixed(2) );
// console.log( genericFunction('Hola').toFixed(2) );


interface Hero{
    name: string,
    power:number
}

const johny = {
    name: 'johny',
    power: 100,
    color: 'red'
}

console.log( genericFunction<Hero>(johny).power );


//POckemon excercise

getPockemon(4)
    .then( resp => console.log(resp) )
    .catch( err => console.log(err) )
    .finally( () => console.log('Finalizado'))

console.log();


//Decorators

const charmander = new Pokemon('charmander');

//Here we extend the properties from Pokemon object but the decorator will block it, we get an error
//* (Pokemon.prototype as any).customName = 'Pikachu';


charmander.savePokemon(100);

// here we receive an error because the decorator readonly is catching the change of the property
//* charmander.api = 'Another api';