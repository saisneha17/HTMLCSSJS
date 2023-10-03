//Spread operator
//array
arraysOne = [10, 20, 30, 40, 50]
console.log(arraysOne)

//function
function f1(n1, n2, n3, n4){
    console.log(n1 , " " , n2 ," " ,n3, " ", n4)
}
f1(10, 20, 30, 40)
f1()
f1(...arraysOne)
f1(100, ...arraysOne)