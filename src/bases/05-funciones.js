/*function saludar(nombre) {  // no debe usarse porque es facil confundirse
  return `Hola, ${nombre}`;
}
saludar = 5;
*/

/*const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};*/

/*const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};*/

//const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar3 = () => `Hola, `;

console.log(saludar3('Vegeta'));

/*const getUser = () => {
  return {
    uid: 'ASDS',
    username: 'sigmasyd',
  };
};*/

const getUser = () => ({
  uid: 'ASDS',
  username: 'sigmasyd',
});
console.log(getUser());

const getUsuarioActivo = (nombre) => ({
  uid: 'aaa',
  username: nombre,
});
const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);
