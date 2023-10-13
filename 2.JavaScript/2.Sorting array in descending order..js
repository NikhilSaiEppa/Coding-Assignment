//Question 2. Perform sorting of an array in descending order. 

function BubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] < arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  const numbers = [5, 2, 9, 1, 5, 6];
  BubbleSort(numbers);
  console.log(numbers);
  