const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let solCarpim = 1;
let sagCarpim = 1;
let total = 0;

for (let index = 0; index < data.length; index++) {
  solCarpim *= data[index][index];
  sagCarpim *= data[index][data.length - (index + 1)];
}
total = solCarpim + sagCarpim;

console.log(total);
