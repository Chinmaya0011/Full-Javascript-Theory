//types-&&(AND),||(OR),!(NOT);
//&&-All condiation must be truefor the result to be true;
//||-only one condiation must be true for the result to be true;
//! inverts the boolean value of condiation

let age=11;
if(age>18 && age<65){
    console.log("you can drive")
}
else if(age<18 || age>65){
    console.log("You cant ride")
}


else(console.log("use bicycle"))