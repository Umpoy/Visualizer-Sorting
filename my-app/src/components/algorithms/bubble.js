


const bubbleSort = (data) => {
    const array = [...data];
    let swap = true;
    let hold;
    const newArray = []
    while (swap) {
        swap = false;
        for (var i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                hold = array[i];
                array[i] = array[i + 1];
                array[i + 1] = hold;
                let holdArray = [...array]
                newArray.push(holdArray)
                swap = true
            }
        }
    }
    return newArray
}

export default bubbleSort