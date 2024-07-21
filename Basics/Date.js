let myDate=new Date()

console.log((myDate.toString()));
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);
console.log();

let date=new Date(2023, 0,23)                 // month starts from 0 
console.log(date.toDateString());

let date2=new Date(2023,0,23,5,3)
console.log(date2.toLocaleString()); 

let date3=new Date("01-14-2023")
console.log(date3.toLocaleDateString());

let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(date3.getTime());

console.log();
console.log(Math.floor(Date.now()/1000));              // in seconds 

//  myDate.toLocaleString('default', {
//     weekday:"long"
//  })