//object
var obj1 = {
    firstName: "Sai",
    lastName : "Chandra",
    email : "sai@gmail.com",
    contact :  9491472779,
    devices : ['mobile', 'laptop', 'desktop', 'ipad', 'tablet']
}

var objJSON = JSON.stringify(obj1)
console.log(objJSON) // {"firstName":"Sai","lastName":"Chandra","email":"sai@gmail.com","contact":9491472779}
console.log(typeof(objJSON)) // string

//replace(old, new
var r = objJSON.replace("Sai", "Vamsi")
var r = objJSON.replace("Chandra", "Kumar")
console.log(r) 