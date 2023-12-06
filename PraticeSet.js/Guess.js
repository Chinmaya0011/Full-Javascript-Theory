let guessNumber=[1,24,34,53,4,14];
let correctNum=53;
for(let i=0;i<guessNumber.length;i++){
    if(guessNumber[i]===correctNum){
        console.log(`correct num found ${guessNumber[i]}`)
    }
    else{console.log("not found")}
}