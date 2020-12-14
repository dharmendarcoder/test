let string1=prompt("enter  first number");// prompt box always take values as a string
let string2=prompt("enter the second number");
let string3=prompt("enter the third number");
let string4=prompt("enter the fourth number");
let number1=(+number1);// changing to number
let number2=(+number2);
let number3=(+number3)
let number4=(+number4)
let finalResult=(result*((result2+result3)/(result3*result4)));
console.log(finalResult);
// another way
function mathOperation(str1,str2,str3,str4){
    let num1=1*str1;
    let num2=1*str2;
    let num3=1*str3;
    let num4=1*str4;
    let result=num1*(num2+num3)/(num3*num4);
    return result;

}
mathOperation("20","30","10","2")
