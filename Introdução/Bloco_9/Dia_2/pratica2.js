const numbers = new Promise((right, wrong) => {
  const array = [1, 1, 1, 1, 1];
  const divisores = [2, 3, 5, 10];
  const result = array.map((num) => +((Math.random() * 50) ** 2).toFixed(2))
  .reduce((acc, value) => acc + value, 0);
  if (result < 1000) return wrong("É mais de oito mil! Essa promise deve estar quebrada!");
  const divido = divisores.map((div) => result / div);
  right(divido);
})

numbers
.then((msg) => new Promise( (right, wrong) => {
  console.log(msg.reduce((acc, value) => acc + value, 0).toFixed(2))
}))
.catch((error) => console.log(error))
