const arr=[1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greeting="Hello World!"
for (const i of greeting) {
    console.log(`char is ${i}`);
}

// map

const map=new Map()
map.set('IN', "India")
map.set('USA' , "United States of America")
map.set('Fr',"France")
console.log(map );

for (const key of map) {
    console.log(key);
}

for (const [key,value] of map) {                // print seperate key and value 
    console.log(key,':-', value);
}


const myObject= {
    game1: 'NFS' ,
    game2:'spiderman'
}

// for (const [key,value] of myObject) {
//     console.log(key,value);                  dont work with objects 
// }