function merge(arr, l, m, r){
    n1 = m - l + 1;
    n2 = r - m;

    Larr = new Array(n1);
    Rarr = new Array(n2);

    var x = 0;

    for(x = 0; x < n1; x++) Larr[x] = arr[l + x];
    for(x = 0; x < n2; x++) Rarr[x] = arr[m + x + 1];
    
    i = 0, j = 0; k = l;

    while(i < n1 && j < n2)
        if(Larr[i] <= Rarr[j]) arr[k++] = Larr[i++];
        else arr[k++] = Rarr[j++]

    while(i < n1) arr[k++] = Larr[i++];

    while(j < n2) arr[k++] = Rarr[j++];
}

function mergeSort(arr, l, r){
    if(l >= r) return;
    var m = l + Number.parseInt((r - l) / 2);
    mergeSort(arr, l, m);

    mergeSort(arr, m+1, r);
    merge(arr, l, m, r);
}



var arrs = [38, 27, 43, 3, 9, 82, 10];
console.log(arrs);

mergeSort(arrs, 0, arrs.length - 1);
console.log(arrs);