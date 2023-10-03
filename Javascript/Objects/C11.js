var l1 = {
    firstName: "Sai",
    lastName : "Chandra",
    f1 : function(age, contact){
        console.log(this.firstName, this.lastName)
        console.log(age, contact)
    }
}

console.log(l1)
l1.f1(26, 9491472779)

//function borrowing
//call()
l1.f1.call(l1, 28,9491472779) // 28 9491472779

//apply()
l1.f1.apply(l1, [30, 9491472779]) // 30 9491472779

//bind()
var b = l1.f1.bind(l1, 32, 9491472779)
b()