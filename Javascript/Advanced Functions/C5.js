//rest operator and spread operator
var obj1 = {
    userName: "Sai Chandra",
    userContact : 9491472779,
    userAge : 23,
    userAddrss : "Hyd"
}
console.log(obj1)

var {userName, ...r} = obj1
console.log(obj1)

var obj2 = {
    ...obj1,
}
console.log(obj2)