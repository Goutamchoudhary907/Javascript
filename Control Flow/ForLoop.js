
for(let i=1;i<=10;i++){
//  console.log(i);     
}

for (let i = 0; i < 5; i++) {
  console.log(`Outer loop value:${i}`);
  for (let j = 0; j <2; j++) {
    console.log(`Inner loop value ${j} and outer loop value ${i} `);    
  }
}


let myArr=["Flash" , "batman" ,"superman"]
console.log(myArr.length);

for (let i = 0; i < myArr.length; i++) {
   console.log(myArr[i]);    
}

console.log();
console.log("Break:");

for (let i = 1; i <= 10; i++) {
    if(i==5){
        console.log(`Detected 5`);
        break
    }
    console.log(`Value of i is ${i}`);
}
console.log();
console.log("Continue:  ");
for (let i = 1; i <= 10; i++) {
    if(i==5){
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${i}`);
}