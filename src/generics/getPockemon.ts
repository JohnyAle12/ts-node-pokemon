import axios from "axios";
import { Pokemon } from "./types";

export const getPockemon = async(pockemonId:number): Promise<Pokemon> => {
    const resp = await axios.get<Pokemon>('https://pokeapi.co/api/v2/pokemon/'+pockemonId);
    return resp.data;
} 