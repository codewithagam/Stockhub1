// let i=1;
// while(i<=5)
// {
//     console.log(i);
//     i++;
// // }
// let str="apnacollge";
// let len=0;
// for(let i of str)
// {
//     console.log("i=",i);
//     len++;

// }
// console.log("length")
// let student={
// name :"agam",
// mark : 80,
// isPass :true,
// }
// for(let key in student )
// {
//     console.log("key",key,"value",student[key]);
// // }
// for(let i=1;i<=100;i++)
// {
//     if(i%2==0){
//         console.log(i);
//     }


// }

// let gameNum=25;
// let userNum=prompt("enter number");
// console.log("number entered is",userNum);
// while(gameNum! =userNum)
// {
//     userNum=prompt("wrong choice reenter number");
// }
// console.log("you entered right number");
// let str="my name is agam";
// let str2='agam aga';

// let obj={
//     item:"pen",
//     price:10,
// };
// let sentence=`this is a item ${obj.item} and the cost is ${obj.price}`;
// console.log(sentence);
// // console.log("apna college");
// let str ="   agam agarwal   ";
// let str2 ="anshika";
// uppercase=str.toUpperCase();
// lowercase=str.toLowerCase();
// console.log(uppercase);
// console.log(lowercase);
// console.log(str.trim());
// console.log(str.slice(0,9));
// console.log(str.concat(str2));
// console.log(str.replaceAll("ag","g"));
// console.log(str.charAt((6)));
// let userName=prompt("enter the full name");
// let user="@"+userName+userName.length;
// console.log("the user name is ",user);
// let marks=[96,97,98,96,95];

// console.log(marks);
// console.log(marks.length);
// console.log(name);
// marks[2]=66;
// console.log(marks);
// let name=["agam","ananya","arun","anshika","alien"];
// for(let i=0;i<name.length;i++)
// {
//     console.log(name[i]);
// }
// for(let item of name)
// {
//     console.log(item);
// }
// let marks=[85,97,44,37,76,60];
// let sum=0;
// let avg=1;
// for(let i=0;i<marks.length;i++)
// {
//      sum=sum+marks[i];
    

// }
//  avg=sum/6;
// console.log(avg);
// let price=[250,645,300,900,50];
// for(i=0;i<price.length;i++)
// {
//   price[i]=price[i]-(price[i]*0.1);
// }
// for(let items of price)
// {
//     console.log(items);
// // }
// let fooditem= ["potato","litchi","mango","chips"];
// fooditem.push("chips","burger","paner");
// console.log(fooditem);
// fooditem.pop();
// console.log(fooditem.toString());

// let dc_heros=["superman","batman"];
// let indian_heros=["Shaktiman"];


// let heros=marvel_heros.concat(dc_heros,indian_heros);
// console.log(`the hero is ${heros}`);

// let val=marvel_heros.shift();
// console.log(val);
// let marvel_heros=["thor","spiderman","ironman","doctorstrange","antman"];
// console.log(marvel_heros);
// console.log(marvel_heros.slice(1,5));
// let arr=[4,5,8,9,5];
// arr.splice(2,0,101,102);
// arr.splice(3,1);
// let arr=["bloomberg","microsoft","uber","google","ibm","netflix"];
// console.log(arr.shift());
// arr.splice(2,1,"ola");
// arr.push("amazon");
// function myFunction(msg,n)
// {
//     console.log(msg*n);
//     console.log("i completed css and html");
// }
// myFunction("this is my message",100);
// function sum(a,b)
// {
//  s=a+b;
//  console.log("before");
// return s;
// console.log("after")
// }
// const arrowsum=(a,b)=>{console.log(a+b);}
// const arrowmul=(a,b)=>(console.log(a*b));
// const printhello=()=>{
//     console.log("hello");}
// sum1=sum(4,5);
// console.log(sum1);
// function vowel(str)
// { let cnt=0;
//     for(i=0;i<str.length;i++)
//     {
//         if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u')
//         {
//              cnt=cnt+1;
//         }
//     }
//     return cnt;
// }
// let num=vowel(prompt("enter string"));
// console.log(num);
// function abc()
// {
//     console.log("hello");
// }
// function myfunc()
// {
//     return abc;
// }
// let arr=[1,2,3,4,5];
// arr.forEach((val) => {
//     console.log(val*val);

   
// });
// let num=[2,5,6,8,7];

// let newArr=num.filter((val)=>{
//     return val%2==0;
// });
// console.log(newArr);
// let arr=[1,2,3,4,5,1011];
// const output=arr.reduce((prev,curr)=>{
//     return prev<curr?prev:curr;
// });
// console.log(output);
// let mark=[98,87,85,65,45,97];
// const output=mark.filter((pre)=>{
//  return pre>90;
// });
// console.log(output);
let n=prompt("enter number");
let arr=[];
for(let i=1;i<=n;i++)
{
    arr[i-1]=i;
}
const fact =arr.reduce((prev,curr)=>{
    return prev*curr;
});
console.log(fact);
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        function getData(dataid){
            setTimeout(()=>{
                console.log("data",dataid);

            },2000);

        }
        getData(1);  
        getData(2); 
        getData(3); 
        getData(4);         
       





    </script> 
</body>
</html>
<!DOCTYPE html>
<html lang="en">
  <head> </head>
  <body>
    <script>
      const mypromise = new Promise((resolve, reject) => {
        const passed = "aditya@123";
        if (password.length > 8) {
          resolve("password is strong");
        } else {
          reject("password is weak");
        }
      });
    </script>
  </body>
</html>
