// console.log("hello mini");

// let a=10;
// let b=20;
// console.log("a =",a, "& b =",b);
// console.log("a+b=",a+b);
// console.log("a-b=",a-b);
// console.log("a*b=",a*b);
// console.log("a**b=",a**b);

//                                       unary operator

// a=a+1;
// a++; 
//a=a+1
// b++;
//b=b+1

// a--;
// a=a-1;
// b--;
// b=b-1;
// --a;
// --b;
// console.log("a = ", a, "& b = ",b);


// comparision operator

// console.log("10!=20",a!=b);

// let cond1=a<b;
// let cond2=a===b;
// let cond2=a===10;
// console.log("cond1 && cond2", cond1 && cond2);
// console.log("cond1 || cond2", cond1 || cond2);


//                                     conditional statement


// let age =2;
// if (age>18){
//     console.log("You can vote");
// }
// if (age<18){
//     console.log("You cannot vote");
// }

// let mode="light";
// let color;

// if(mode==="dark"){
//   color="black";
// }
// if(mode==="light"){
//   color="white";
// }
// console.log(color);

// let mode="light";
// let color;

// if(mode==="dark"){
//   color="black";
// }
// else{
//   color="white";
// }
// console.log(color);

// let num = 1934;
// if(num%2==0){
//     console.log(num,"is even");
// }else{
//     console.log(num,"is odd");
// }

let age=48;
// if(age<18){
//     console.log("junior");
// }else if(age>60){
//     console.log("senior");
// }else{
//     console.log("middle");
// }

//                                        Ternary operator
// let result=age>18 ? "adult":"not adult";
// console.log(result);


// let name=prompt("hello");
// console.log(name);

//                                    Question-1

// let num=prompt("insert number");
// if(num%5==0){
//     console.log("multiple of 5");
// }else{
//     console.log("not multiple of 5");
// }
// console.log(num);

//                                    Question-2

let score = prompt("enter score between(0-100)");
let grade;
if(score=>90 && score<=100){
   grade = "A";
}else if(score=>70 && score<=89){
   grade = "B";
}else if(score=>60 && score<=69){
   grade = "C";
}
else if(score=>50 && score<=59){
   grade = "C";
}
else if(score=0 && score<=49){
    grade = "F";
}
console.log("According to your score you present grade is : ",grade);