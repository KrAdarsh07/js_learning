const accountId = 1327492 //once assigned cannot change const variable value
let accountEmail = "example@you.com" 
var accountPassword = "exsmpple321" //not advised to use var as it has bloack scope and functional scope issue
accountCity = "Mumbai"  //although js allow this type of declaring variable, this is not preferred.
let accountState = "Maharashtra"

// accountId = 2 //not allowed

console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountState, accountCity])