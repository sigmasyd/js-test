const nombre = 'Carlos';
const apellido = 'Barcos';

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `
  ${nombre} 
  ${apellido} 
  ${2 + 2}
`;
console.log(nombreCompleto);

function getSaludo(nombre) {
  return 'Hola Mundo ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);
