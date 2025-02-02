const accountId = 12345
let accountEmail = "priyansh@yahoo.com"
let accountPassword = "123456"
accountCity = "Delhi"    // if nothing is written in front of a name , it is considered as variable from default
let accountState ;

/*
1) Const is used for values that doesn't need to be changed in future.
2) let is used for variables, values that can be changed in future.
3) No need to use var for variables because let do the same thing.
*/

accountEmail = "harsh@yahoo.com"   // don't use let keyword again because we are REASSIGNING the value not REDECLARING the value 
accountPassword = "1234"
accountCity = "Jaipur"

console.table([accountId, accountEmail, accountPassword, accountState, accountCity]);
