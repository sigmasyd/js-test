//import { heroes } from './data/heroes';

// importacion por default: heroes
// importacion individual: {owners}

//import heroes, { owners } from './data/heroes';
//import { heroes, owners } from './data/heroes';
//import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';

//console.log(heroes);
//console.log(owners);

export const getHeroesById = (id) => heroes.find((heroe) => heroe.id === id);

//console.log(getHeroesById(2));

export const getHeroesByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);
//console.log(getHeroesByOwner('DC'));
