function printArray(arr, n) {
    let i;
    for (i = 0; i < n; i++) console.log(arr[i]);
  }

function bubbleSort(arr, n) {
    var i, j, temp;
    var swapped;
    for (i = 0; i < n - 1; i++) {
      for (j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapped = true;
        }
      }
      if (!swapped) break;
    }
  }