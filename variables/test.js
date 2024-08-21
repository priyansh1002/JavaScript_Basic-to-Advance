const accID=1234;   // we can not change the values in const variables
let accEmail="pp@gmai.com";   //we can change the values it is most preffered
var accPass="12345";   //not used
accountCity="Kanpur";  //not used

console.table([accID, accEmail,accPass,accountCity]);  //console.table is used to print in table format

/*prefer not to use var because it will lead to scope problem which is basically block or functional scope problem */