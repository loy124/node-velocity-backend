function randomChart() {
  const x = Math.floor(Math.random() * 90) + 1;
  const y = Math.floor(Math.random() * 90) + 1;
//   console.log(x, y);
  return { x, y };
}

const randomArray = () =>
  Array(24)
    .fill(null)
    .reduce((acc, cur) => {
      acc.push(randomChart());
      return acc;
    }, []);

module.exports = { randomChart, randomArray };
