import type IPokemon from "./IPokemon";

export default interface IAbilities{
    id: number,
    name: string,
    is_main_series: boolean,
    generation: Array<string>,
    names: Array<string>,
    effect_entries: Array<string>,
    effect_changes: Array<string>,
    flavor_text_entries: Array<string>,
    pokemon: Array<IPokemon>
}