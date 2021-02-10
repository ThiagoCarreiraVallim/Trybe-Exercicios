const feti = () => {
  return fetch('https://dog.ceo/api/breeds/image/random').then((response) =>
    response.json()
  ).then(json => json.status === success ? resolve(json) : reject(json));
}

module.exports = { feti };