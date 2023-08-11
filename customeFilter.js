// Prototype - The list of methods that gets attached to the object as soon as it is declared is called its prototype

// Map Polyfill

Array.prototype.myFilter = function (cb) {
    const items = []
    for(let i=0;i<this.length;i++){
        cb(this[i], i, this) && items.push(this[i])
    }
    return items
}


const arr = [1,2,3,4,5]

const newArr = arr.myFilter((item) => item > 2)

console.log(newArr)