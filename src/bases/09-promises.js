import { getHeroesById } from './bases/08-imp-exp';

const getHeroesByAsinc = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p1 = getHeroesById(id);
      if (p1) {
        resolve(p1);
      } else {
        reject('No se pudo encontrar el heroe');
      }
    }, 2000);
  });
};

getHeroesByAsinc(5).then(console.log).catch(console.warn);
