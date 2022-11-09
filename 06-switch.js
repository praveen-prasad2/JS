
// CHECK NUMBER

function checkNum(num){
    switch(num){
        case 1:
            return("one")
            break;
        case 2:
            return("two")
            break;
        case 3:
            return("three")
            break;
        case 4:
            return("four")
            break;
        case 5:
            return("five")
            break;
        default: return("Not in Range")
    }

}
console.log(checkNum(5))

// PRINT DAY

function printDay(num){
    switch(num){
        case 0:
            console.log("Sunday")
            break;
        case 1:
            console.log("Monday")
            break;
        case 2:
            console.log("Tuesday")
            break;
        case 3:
            console.log("Wednesday")
            break;
        case 4:
            console.log("Thursday")
            break;
        case 5:
            console.log("Friday")
            break;
        case 6:
            console.log("Saturday")
            break;
        default: console.log("Invalid input")
    }

}
printDay()


// CHAT BOT

function customMessage(str){
    str = str.toLowerCase()
    switch(str){
        case 'hi':
            console.log("Hi there,Big offers awaiting for you here")
            break;
        case 'offer':
            console.log("Monday")
        case 'offers':
            console.log("Here are some amazing offers for you! now bring iphone 14 @ just 74999/-")
            break;
        case 'customer care':
            console.log("Customer care number: 123-904-6329")
            break;
        default: console.log("Cash on delivery is available")
    }

}
customMessage('Hi')

// CALCULATOR

function calculator(num1,num2,op){
    switch(op){
        case '-':
            console.log(num1-num2)
            break;
        case '*':
            console.log(num1*num2)
            break;
        case '+':
            console.log(num1+num2)
            break;
        case '/':
            console.log(num1/num2)
            break;
        default: console.log("invalid input")
        }
    
    }
    calculator(10,15,'*')

// COUNT DAYS IN A MONTH

function countMonthDays(month){
    month = month.toLowerCase()
    switch(month){
        case 'january':
        case 'March':
        case 'May':
        case 'july':
        case 'august':
        case 'october':
        case 'december':
            console.log("31 Days")
            break;
        case 'april':
        case 'june':
        case 'september':
        case 'november':
            console.log("30 Days")
            break;
        case 'february':
            console.log("28 days")
            break;
        default: console.log("error")
        }
    
    }
    countMonthDays('')
    
