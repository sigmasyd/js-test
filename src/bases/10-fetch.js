const apiKey = 'anyoG6FgTEQ3Fx2KywvgvcZGe1b9Bv1Y';
//http://api.giphy.com/v1/gifs/random?apikey=anyoG6FgTEQ3Fx2KywvgvcZGe1b9Bv1Y

const request = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

request
  .then((response) => response.json())
  .then(({ data }) => {
    //console.log(data.images.original.url);
    const { url } = data.images.original;
    console.log(url);
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  })
  .catch(console.warn);
