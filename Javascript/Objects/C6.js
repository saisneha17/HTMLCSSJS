//adding properties and function to an empty object 
l1 = {

}
console.log(l1) //{}

l1.firstName = "Sai"
l1.lastName = "Chandra"

console.log(l1) // { firstName: 'Sai', lastName: 'Chandra' }

l1.f1 = function(){
    console.log(l1.firstName, l1.lastName)
}

console.log(l1) // { firstName: 'Sai', lastName: 'Chandra', f1: [Function (anonymous)] }

l1.f1() // Sai Chandra