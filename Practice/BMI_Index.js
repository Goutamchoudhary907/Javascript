const readline=require('readline');

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question('Enter your height in cm :' , (height) => {
   if(isNaN(height) || height <0 || height > 300){
    console.log("Enter correct height between 0 to 300");
    rl.close();
    return;
   }
    rl.question('Enter your weight in kg: ',(weight) =>{
        // console.log(height,weight);
        if(isNaN(weight) || weight <0 || weight > 500) {
            console.log("Enter correct weight between 0 to 500");
            rl.close();
            return;
        }
        const bmi= (weight/ ((height*height)/10000)).toFixed(2)
     console.log(bmi);
      rl.close();  
    });
});

