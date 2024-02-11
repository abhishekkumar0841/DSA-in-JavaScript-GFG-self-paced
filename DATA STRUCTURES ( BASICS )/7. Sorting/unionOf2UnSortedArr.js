//Efficient solution 
// Time: theta(m + n)
// Space: O(m + n)
function unionSize(arr1, arr2) {
    let mySet = new Set(arr1)
    for(let i = 0; i < arr2.length; i++){
        mySet.add(arr2[i])
    }

    return mySet.size;
}

console.log(unionSize([15, 20, 5, 15], [15, 15, 15, 20, 10]));
