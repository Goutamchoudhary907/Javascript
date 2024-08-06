const name="Goutam"
const repoCount=50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const str=new String('hitesh-hc-com')
console.log(str[0]);
console.log(str.length);
console.log(str.toUpperCase());

console.log(str.charAt(2));
console.log(str.indexOf('d'));

const newStr=str.substring(0,3)
console.log(newStr);

const anotherStr=str.slice(-5,12)           // can use negative idx for start from last -5 means(length -5) 12-5 =7 
console.log(anotherStr);

const str1="     Hello     "
console.log(str1);
console.log(str1.trim());                 // remove spaces

const url="https://hitesh.com/hitesh20%choudhary"
console.log(url.replace('20%','-'));

console.log(url.includes('hitesh'));

console.log(str.split('-'));             // split basic of -