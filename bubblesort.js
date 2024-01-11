const bubbleSort = (arr) => {
  let length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return;
};

const array = [15, 63, 24, 87, 109, 1, 0, 75, 43];

console.log(bubbleSort(array));
