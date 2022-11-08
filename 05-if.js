if(true){
    console.log("if is working")
}else{
console.log("if is not working")}

// GREATER THAN 100

function gtHundred(num){
    if(num>100){
        return(true)
    }else{
        return(false)
    }  
}
console.log(gtHundred())

// ODD OR EVEN

function oddOrEven(num){
    if(num%2==0){
        return("even")
    }else{
        return("odd")
    }
}
 console.log(oddOrEven(8))

// ODD or EVEN or ZERO

function oddEvenZero(num){
    if(num==0){
        return("zero")
    }else if(num%2==0){
        return("even")
    }else{
        return("odd")
    }
}
console.log(oddEvenZero(0))


// ODD or EVEN(+ve  or -ve)

function positive(num){
    if(num==0){
        return("zero")
    }else if(num%2==0){
        if(num<0){
            return("negative even")
        }else{
            return("positive even")
        }
    }else if(num<0){
        return("negative odd")
    }else{
        return("positive odd")
    }
    
}
console.log(positive())

// CHECKING ARRAY

function checkArray(arr){
    if(arr[0]== 0 && arr.length<=5){
        return("true")
    }else{
        return("false")
    }
}
console.log(checkArray([0,1,2,3,4]))

// ADULT OR NOT


function barTender(year){
    if(2022-year>21){
        return("cheers")
    }else{
        return("Get out!!")
    }
}
console.log(barTender(2010))