//Nested Object
userDetails = {
    firstName: 'Sai',
    lastName : 'Chandra',
    userAddress : {
        job : "IT",
        contact : 9491472779
    }
}
console.log(userDetails)

// {
//     firstName: 'Sai',
//     lastName: 'Chandra',
//     userAddress: { job: 'IT', contact: 9491472779 }
// }

console.log(userDetails.firstName + ' ' + userDetails.lastName) //Sai Chandra
console.log(userDetails.userAddress.job + ' ' + userDetails.userAddress.contact) // IT 9491472779