//concat (merging the arrays)
l1 = [10, 20, 30, 40]
l2 = [50, 60, 70, 80]
console.log(l1) //  [10, 20, 30, 40]
console.log(l2) //  [50, 60, 70, 80]
console.log(l1.concat(l2)) // [10, 20, 30, 40]
                           // [50, 60, 70, 80]

console.log(l1.concat(100, 200)) // [10, 20, 30, 40, 100, 200]

console.log(l1.concat(1000, 2000).concat(3000, 4000)) // [10, 20, 30, 40, 1000, 2000, 3000, 4000]
