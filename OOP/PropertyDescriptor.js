const descriptor=Object.getOwnPropertyDescriptor(Math, 'PI')                            // give own propertyof the specific object , here it gives PI property of Math object 
// console.log(descriptor);



// console.log(Math.PI);
// Math.PI=5                                                                            // can not change 
// console.log(Math.PI);


const chai={
    name:"ginger chai" ,
    price:250 ,
    isAvailable:true ,

     orderChai:function(){
        console.log("Chai nhi bni");
     }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));                                // get name property of chai , where all properties are true 

Object.defineProperty(chai,'name',{                                                       // here we define its properties to fallse 
    writable:false ,
    enumerable:false              
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));                                // now properties are changed as false


for(let [key,value] of Object.entries(chai)){                                              // .entries is used to iterate object 
    if(typeof value !== 'function'){                                                       // this check for function , if any funtion is present in object it print it as it is so if not function then print key value  
       
        console.log(`${key}:${value}`);                             // here name is not print because be make enumerable of name false
    }
}

