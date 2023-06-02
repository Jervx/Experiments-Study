function binarySrch(arr, n, l, r) {
  if (l > r) return -1;
  var mid = Number.parseInt((l + r) / 2);
  if (arr[mid] === n) return mid;
  else if (n > arr[mid]) return binarySrch(arr, n, mid + 1, r);
  return binarySrch(arr, n, l, mid - 1);
}

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarySrch(arr, 11, 0, arr.length - 1));
