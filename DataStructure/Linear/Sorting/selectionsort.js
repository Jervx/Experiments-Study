function printArray(arr, n) {
    let i;
    for (i = 0; i < n; i++) console.log(arr[i]);
  }
  
function swap(arr,xp, yp){
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
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