//const getImagenPromesa = () =>
//  new Promise((resolve) => resolve('https://asdasdasda.com'));
//getImagenPromesa().then(console.log);

const getImagen = async () => {
  try {
    const apiKey = 'anyoG6FgTEQ3Fx2KywvgvcZGe1b9Bv1Y';
    // await... espera a terminar la funcion antes de continuar
    const response = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await response.json();
    console.log(data);
    const { url } = data.images.original;
    console.log(url);
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.error(error);
  }
};

//getImagen().then(console.log);
getImagen();
