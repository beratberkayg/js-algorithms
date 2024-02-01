const numbers = [1, 2, 3, 4, 5, 6, 7, 1, 3, 7];

const repeatedArray = (arr) => {
  const returnArr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      i !== j && arr[i] === arr[j]
        ? returnArr.includes(arr[i])
          ? 0
          : returnArr.push(arr[i])
        : 0;
    }
  }

  return returnArr;
};

console.log(repeatedArray(numbers));
