// HOW MANY DAYS FOR YOUR B'DAY 

function wishMe(birthday){
let today=9

   if(birthday>today){
    return((birthday-today) + "Days")
   }else if(birthday==today){
        return("Happy Birthday")
   }else{
    return("Oops! B'day is over")
   }
}
console.log(wishMe())

// ADULT OR NOT

function adult(age){
   if(age >= 18 && age <= 25){
      return("you're eligible for voting")
   }else if(age<18){
      return("sorry you are a Kid")
   }if(age >= 25){
      return("you are eligible for nomination and voting")
   }else{
      return("error")
   }
}
console.log(adult())

// PRINT EVEN NO UPTO n NUMBERS

function evenNo(number){
   for(let i=2 ; i<=number ; i+=2){
      console.log(i)
   }
}
evenNo()

// PRINT EVEN NO BETWEEN 2 NUMBERS 

function printEvenBetween(num1,num2){
   for(i=num1;i<=num2;i+=2){
      if(i % 2==0){
         console.log(i)
      }else{
         console.log(i+1)
      }
      
   }
}
printEvenBetween()

// ADD UPTO N NUMBER 

function addUpto(num){
   let sum=0
   for( i=0;i<=num;i++){
      sum = sum+i
      console.log(sum)
   }
   
  
}
addUpto()

// SUM BETWEEN 2 NUMBERS 

function printSumBetween(num1,num2){
   let sum=num1
   for(let i=num1;i<=num2;i++){
      sum=sum+num1
      console.log(sum)
   }
}
printSumBetween()

// MATCH HOUSES 

function matchHouses(houseno){
   let match
   if(houseno==0){
      match == 0
   }else if(houseno==1){
      match == 6
   }else{
      let sum=6
      for(i=2;i<=houseno;i++){
         sum=sum+5
         console.log(sum)
      }
   }
}
matchHouses()

// FIND MINIMUM VALUE FROM AN ARRAY

function getMinArray(arr){
   for(i=0;i<arr.length ;i++){
      if(arr[0]<0 || arr[i]){
         min=arr[0]
      }else if(arr[0]<arr[1]){
         min=arr[1]
      }else if(arr[1<arr[2]]){
         min=arr[2]
      }
      console.log(min)
   }
}
getMinArray([-5,2,3,-4,-2,6])


