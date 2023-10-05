l1 = [10, 20, 30, 40, 50, 10, 60, 70, 10, 80, 90, 100]
//     0   1   2   3   4   5   6   7   8   9  10   11
console.log(l1)
console.log(l1.length)

console.log(l1.indexOf(10)) // 0
console.log(l1.lastIndexOf(10)) //8

console.log(l1.indexOf(10, 3)) // 5 (if a no. is repeated in a list then the IndexOf(10, 3) is from the index that we choose i.e 3 start moving right and the first 10(element) we find is the position
                                                                                                                          //...(3,4)will give the same result)
//                (element,Indexposition)

console.log(l1.lastIndexOf(10, 7)) // 5 same but from back
