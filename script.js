

function merge(array,inicio,media,tamanho){

    let n1 = media - inicio + 1;
    let n2 = tamanho - media;

    let right= [];
    let left = [];

    for (var i = 0; i < n1; i++)
        left[i] = array[inicio + i];
    for (var j = 0; j < n2; j++)
        right[j] = array[media + 1 + j];



    i=0; j=0; let k= inicio;

    while (i < n1 && j < n2) {
        if (left[i] <= right[j]) {
            array[k] = left[i];
            i++;
        }
        else {
            array[k] = right[j];
            j++;
        }
        k++;
    }
 
    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        array[k] = left[i];
        i++;
        k++;
    }
 
    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        array[k] = right[j];
        j++;
        k++;
    }

}





function mergesort(array,inicio,tamanho){

    if (inicio>=tamanho){
        return;
    }
    let media=parseInt((inicio+tamanho)/2);
    mergesort(array,inicio,media);
    mergesort(array,media+1,tamanho);
    merge(array,inicio,media,tamanho);
    
}





let array = [1,15,16,65,54,45,78,15,32,64,99]

let tamanho=array.length-1;
mergesort(array,0,tamanho)
console.log(array);