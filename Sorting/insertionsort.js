// A utility function to print an array of size n
function printArray(arr, n) {
  let i;
  for (i = 0; i < n; i++) console.log(arr[i]);
}

function swap(arr,xp, yp){
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}

function insertionSort(arr, n) {
  let i, key, j;

  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
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

function selectionSort(arr, n) {
  var i, j, min_idx;

  for (i = 0; i < n - 1; i++) {
    // Find the minimum element in unsorted array
    min_idx = i;
    for (j = i + 1; j < n; j++) if (arr[j] < arr[min_idx]) min_idx = j;

    // Swap the found minimum element with the first element
    swap(arr, min_idx, i);
  }
}

let arr = [12, 11, 13, 5, 6];
let n = arr.length;
// insertionSort(arr,n);
// bubbleSort(arr, n);
printArray(arr, n);
