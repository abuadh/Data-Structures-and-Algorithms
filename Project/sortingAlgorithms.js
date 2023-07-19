export function getInsertionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    insertionSortHelper(array, animations);
    return animations;
}

function insertionSortHelper(array, animations) {
    for(let i = 1; i < array.length; i++){
        let key = array[i];
        let j = i - 1;

        while(j >= 0 && array[j] > key){
            // These are the values that we're comparing; we push them once
            // to change their color.
            animations.push([j+1, j]);
            // These are the values that we're comparing; we push them a second
            // time to revert their color.
            animations.push([j+1, j]);
            // We overwrite the value at index j+1 in the original array with the
            // value at index j in the original array.
            animations.push([j+1, array[j]]);
            array[j+1] = array[j];
            j = j - 1;
        }
        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push([j+1, i]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animations.push([j+1, i]);
        // We overwrite the value at index j+1 in the original array with the
        // value at index i in the original array.
        animations.push([j+1, key]);
        array[j+1] = key;
    }
}
