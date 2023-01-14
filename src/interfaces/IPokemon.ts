import type IAbilities from "./IAbilities";
import type IMoves from "./Imoves";

export default interface IPokemon{
    id: number,
    name: string,
    base_experience: number,
    height: number,
    is_default: boolean,
    order: number,
    weight: number,
    abilities: Array<IAbilities>,
    forms:  Array<string>,
    Game_indices: Array<string>,
    held_items: Array<string>,
    location_area_encounters: Array<string>,
    moves:  Array<IMoves>,
    species: Array<IPokemon>,
    sprites: Array<string>,
    stats: Array<string>,
    types: Array<string>,
    past_types: Array<string>
}