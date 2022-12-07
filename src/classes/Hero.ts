import powers from "../data/powers";

export class Hero{
    constructor(
        public name: string,
        public powerId: number,
        public age: number
    ){}

    get powers():string
    {
        return powers.find( power => power.id === this.powerId )?.desc || 'Not found';

        //when we use ! we said to typescript that can believe in we about the data always be there and not return an error
        // return powers.find( power => power.id === this.powerId )!.desc || 'Not found';
    }
}
