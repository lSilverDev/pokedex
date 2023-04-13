import { Ability, GameIndex, HeldItem, Move, Pokemon, Species, Sprites, Stat, Type } from "./pokemon";

export class pokemonInfo{
  abilities: Ability[];
  base_experience: number;
  forms: Species[];
  game_indices: GameIndex[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: any[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;

  constructor(pokemon: Pokemon){
      this.abilities = pokemon.abilities,
      this.base_experience = pokemon.base_experience,
      this.forms = pokemon.forms,
      this.game_indices = pokemon.game_indices,
      this.height = pokemon.height,
      this.held_items = pokemon.held_items,
      this.id = pokemon.id,
      this.is_default = pokemon.is_default,
      this.location_area_encounters = pokemon.location_area_encounters,
      this.moves = pokemon.moves,
      this.name = pokemon.name,
      this.order = pokemon.order,
      this.past_types = pokemon.past_types,
      this.species = pokemon.species,
      this.sprites = pokemon.sprites,
      this.stats = pokemon.stats,
      this.types = pokemon.types,
      this.weight = pokemon.weight
  }
}
