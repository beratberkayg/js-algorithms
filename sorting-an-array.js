// SORTİNG AN ARRAY

const sorting = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let temp = arr[j];
      if (arr[j] > arr[j + 1]) {
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        console.log(arr);
      }
    }
  }
  return arr;
};

console.log(sorting([13, 99, 2, 14, 23, 7]));
