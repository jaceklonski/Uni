function palindrom(a){
    function pomoc(a, length, index) {
    if (index + 1 > length/2) {
        return true
    }
    else {
    if (a[index] == a[length-1-index]) {return pomoc(a, length, index +1)}
    else { return false}}}

    return pomoc(a, a.length, 0)
}

console.log(palindrom([1,2,3,4,5,6,7]))
console.log(palindrom([1,2,3,4,5,6,7,6,5,4,3,2,1]))