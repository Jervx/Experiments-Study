function swp(arr, a, b) {
  var tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}

function partition(arr, l, h) {
  pvt = arr[h];
  var i = l - 1;
  for (x = l; x <= h - 1; x++) 
    if (arr[x] < pvt) swp(arr, ++i, x);
  
  swp(arr, i + 1, h);
  return i + 1;
}

function quicksort(arr, l, h) {
  if (l < h) {
    var pi = partition(arr, l, h);
    quicksort(arr, l, pi - 1);
    quicksort(arr, pi + 1, h);
  }
}

var arrs = [10, 80, 30, 90, 40, 50, 70];
console.log(arrs);

quicksort(arrs, 0, arrs.length - 1);
console.log(arrs);
