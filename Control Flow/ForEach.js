const programming=["js","rb","py","Java"]


programming.forEach( function (val) {
    console.log(val);
});

// programming.forEach( (item) =>{            using arrow function 
//     console.log(item);
// } )
console.log();

function printMe(item){
    console.log(item);
}
programming.forEach(printMe)                      // give reference 


programming.forEach ((item,index,arr) =>{
console.log(item,index,arr);
})


const myCoding= [                            // array and every value is object 
    {
        languageName:"javascript" ,
        languageFileName:"js"
    } ,
    {
        languageName:"Java" ,
        languageFileName:"java"
    } ,
    {
        languageName:"Python" ,
        languageFileName:"py"
    }
]

console.log();
myCoding.forEach( (item) => {
    console.log(item.languageName );
}

)