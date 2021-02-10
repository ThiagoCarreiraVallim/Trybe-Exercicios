fetch('https://dog.ceo/api/breeds/image/random')
  .then(result => result.json())
  .then(result => {
    console.log(result);
  });
