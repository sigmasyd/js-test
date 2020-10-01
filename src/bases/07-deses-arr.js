const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [, , p3] = personajes; // ignora el primer y segundo
console.log(p3);

const retornaArreglo = () => {
  return ['ABC', 123];
};

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

const useState = (valor) => {
  return [valor, (nombre) => console.log(`Hola ${nombre}`)];
};
const [nombre, setNombre] = useState('Goku');

console.log(nombre, setNombre);
setNombre('Guajinato');
