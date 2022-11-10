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

