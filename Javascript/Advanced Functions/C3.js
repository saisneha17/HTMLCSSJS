//spread operator
//Arrays
l1 = [10, 20, 30, 40, 50]
l2 = [60, 70, 80, 90, 100]
l3 = [...l1, ...l2]
console.log(l3) //[10, 20, 30, 40,  50, 60, 70, 80, 90, 100]

//Objects
obj1 = {
    userName : "Sai Chandra",
    userConatct : 9491472779
}
obj2 = {
    userAge : 22,
    userAddress : "Hyd"
}
obj3 = {
    ...obj1,
    ...obj2
}
console.log(obj3)  // { userName: 'Sai Chandra', userConatct: 9491472779, userAge: 23, userAddress: 'Hyd' }