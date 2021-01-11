/**
 * An ES6 module that implements merge sort algorithm in Javascript.
 * Although it is still tied to this Restaurant Listing app, it
 * will be improved into an NPM package later
 *
 * @author Benjamin Ayangbola
 */

export const sortUtility = {
    /**
     * Merges two lists using merge sort algorithm
     *
     * @param left
     * @param right
     * @param usingSortParam
     * @returns {*[]}
     * @private
     */
    _mergeArrays : (left, right, usingSortParam) => {
        let arr = []
        // Break out of loop if any one of the array gets empty
        while (left.length && right.length) {
            // Pick the smaller among the smallest element of left and right sub arrays
            if (left[0].sortingValues[usingSortParam] < right[0].sortingValues[usingSortParam]) {
                arr.push(left.shift());
            } else {
                arr.push(right.shift());
            }
        }

        // Concatenating the leftover elements
        // (in case we didn't go through the entire left or right array)
        return [ ...arr, ...left, ...right ];
    },

    /**
     * A recursive function that splits an array into further arrays
     * till all splits are atomic (i.e. having just one item in them),
     * then sorts and merges them back into a single sorted array.
     *
     * @param array {Array}
     * @param usingSortParam {String}
     * @returns {*[]|*}
     */
    mergeSort : (array, usingSortParam) => {
        // Create a new array by cloning. Because arrays are passed by reference,
        // we don't want to accidentally modify the original array passed to this
        // function.
        array = [ ...array ];
        const half = array.length / 2;
        // Base case or terminating case
        if(array.length < 2) return array;
        const left = array.splice(0, half);

        return sortUtility._mergeArrays(
            sortUtility.mergeSort(left, usingSortParam), sortUtility.mergeSort(array, usingSortParam), usingSortParam
        );
    }
};
