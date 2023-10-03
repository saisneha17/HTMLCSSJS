var l1 = {
    firstName : "Sai",
    lastName : "Chandra"
}
console.log(l1) // { firstName: 'Sai', lastName: 'Chandra' }

f1 = function(){
    console.log(this.firstName, this.lastName) 
}

//call()
f1.call(l1)

// { firstName: 'Sai', lastName: 'Chandra' }
// Sai Chandra

var l2 = {
    firstName : "Vamsi",
    lastName : "Kumar"
}

f1.call(l2)