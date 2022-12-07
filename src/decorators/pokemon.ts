
// The decorator is a fuction that is exceuted when the TS file is transpiled to JS file
// At the tsconfig we need to change the configuration, allowed experimentalDecorators as true

// This is a decorator
function prinToConsole(constructor: Function){
    console.log(constructor);
}

// This is a factory decorator
const printToConsoleOptional = (print:boolean = false): Function => {
    if( print ){
        return prinToConsole;
    }
    return () => {}
}

const blockPrototype = function(constructor: Function){
    //we can to extend the constructor and prototype using Object.seal
    Object.seal( constructor );
    Object.seal( constructor.prototype );
}

// This is a factory decorator, method decorator
const checkPokemonId = function (){
    return (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) => {
        const originalMethod = descriptor.value;
        console.log({target});

        descriptor.value = (id:number) => {
            if (id < 1 || id >800) {
                return console.error('El id del pokemos debe estar entre 1 y 800, method '+propertyKey);
            }
            return originalMethod(id);
        }
    }
}

// This is a factory decorator, property decorator
const readOnly = function ( iswritable:boolean = true ): Function{
    return (
        target: any,
        propertyKey: string
    ) => {
        const descriptor: PropertyDescriptor = {
            get() {
                console.log(this);  
                return 'Johny';
            },
            set( this, val ) {
                Object.defineProperty( this, propertyKey, {
                    value: val,
                    writable: !iswritable,
                    enumerable: false
                })
            }
        };

        return descriptor;
    }
}

@blockPrototype
@printToConsoleOptional(true)
export class Pokemon{
    
    @readOnly()
    public api = 'https://pokeapi.co/';

    constructor(
        public name: string
    ){}

    @checkPokemonId()
    savePokemon(id:number){
        console.log('Pokemon guardado '+id);
    }
}