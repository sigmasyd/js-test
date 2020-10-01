const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman',
  rango: 'Soldado',
};

/*const rertonaPersona = ({ nombre, edad, rango = 'Capitan' }) => {
  console.log(nombre, edad, rango);
};

rertonaPersona(persona);*/
//const { nombre } = persona;

/*console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);*/

const useContext = ({ clave, edad, nombre, rango = 'soldado' }) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.123213,
      lng: -12.121212,
    },
  };
};

const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = useContext(persona);
//console.log(avenger);
console.log(nombreClave, anios);
//console.log(latlng);
console.log(lat, lng);
