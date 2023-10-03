//set and get properties using . and [] 
var l1 = {
    firstName:"Sai",
    lastName:"Chandra"
}
console.log(l1) //{ firstName: 'Sai', lastName: 'Chandra' }
console.log(l1.firstName, l1.lastName) //Sai Chandra
console.log(l1['firstName'], l1['lastName'])  //Sai Chandra

l1.job = "IT"
console.log(l1['job']) //IT

l1.contact = 9491472779
console.log(l1['contact']) //9491472779

console.log(l1) //{ firstName: 'Sai', lastName: 'Chandra', job: 'IT', contact: 9491472779 }