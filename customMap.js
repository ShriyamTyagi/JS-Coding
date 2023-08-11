// Prototype - The list of methods that gets attached to the object as soon as it is declared is called its prototype

Array.prototype.myMap = function (cb) {
    const items = []
    for(let i=0;i<this.length;i++){
        items.push(cb(this[i], i, this))
    }
    return items
}


const arr = [1,2,3,4,5]

const newArr = arr.myMap((item) => {
    return item*2
})

console.log(newArr)