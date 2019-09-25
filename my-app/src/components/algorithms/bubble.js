const numArray = [8, 4, 7, 5, 6, 9, 2, 1, 3];

const bubbleSort = (array) => {
    let swap = true;
    let hold;
    while (swap) {
        swap = false;
        for (var i = 0; i < array.length - 1; i++) {
            hold = array[i];
            if (hold > array[i + 1]) {
                array[i] = array[i + 1];
                array[i + 1] = hold;
                swap = true
            }
        }
    }
    return array
}

console.log(bubbleSort(numArray));