//updating, adding, deleting properties
//String literals
fName = "Sai"
lName = "Chandra"

//Object literals
var l1 = {
    firstName : fName,
    lastName : lName
}

console.log(l1) //{ firstName: 'Sai', lastName: 'Chandra' }

l1.firstName = "Vamsi"
l1.lastName = "Kumar"

console.log(l1) //{ firstName: 'Vamsi', lastName: 'Kumar' }

l1.job = "IT"
l1.contact = 9491472779

console.log(l1)

// {
//     firstName: 'Vamsi',
//     lastName: 'Kumar',
//     job: 'IT',
//     contact: 9876544210
// }

delete l1.lastName
console.log(l1) //{ firstName: 'Vamsi', job: 'IT', contact: 9876544210 }