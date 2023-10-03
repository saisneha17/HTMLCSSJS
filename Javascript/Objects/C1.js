//objects literal
var l1 = {

    //properties
    firstName : "Sai",
    lastName : "Chandra",
    //console.log(firstName, lastName) //SyntaxError: Unexpected identifier 'console'

    //function
    display: function(){
        console.log("Display Function")
    }
}
console.log(l1) 
//{ firstName: 'Sai', lastName: 'Chandra' }
//{ firstName: 'Sai', lastName: 'Chandra', display: [Function: display] }

//objecRef.functionNam
l1.display()

// { firstName: 'Sai', lastName: 'Chandra', display: [Function: display] }
// Display Function