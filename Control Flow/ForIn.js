const myObject ={
   js: "Javascript" ,   
   cpp: "C++" ,   
   rb: "ruby" ,   
   swift: "Swift by apple" ,   
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming=["js","rb","py","Java"]

for (const key in programming) {
    console.log(programming[key]);
}

const map=new Map()
map.set('IN', "India")
map.set('USA' , "United States of America")
map.set('Fr',"France")

// for (const key in map) {                map is not iterable with for in 
//   console.log(key);
// }