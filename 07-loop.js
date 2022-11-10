function  printUptoFive(){
    let a=1
    while(a<=5){
            console.log(a)
            a++;
    }
}
printUptoFive()


function printUpto(value){
    let a=1
    while(a<=value){
        console.log(a)
        a++
    }
}
printUpto()

// DO WHILE

function  printUptoDoWhile(value){
    let a=1
    do{
        console.log(a)
            a++;
    }while(a<=value)
}
printUptoDoWhile()


// FOR LOOP

function  printUptoFor(value){
    for(let i=0;i<=value;i++){
    console.log(i)}
}
printUptoFor(4)

function printFrom(value){
    for(let i=value;i>=1;i--){
        console.log(i)
    }
}
printFrom(8)


// function printArray(arr){
//     for(i=arr;i=(0-arr.length-1);arr[i]++){
//         console.log(arr[i])
//     }

// }
// printArray([1,2,3,4,5])

function printArray(arr){
    for(i=0;i< arr.length;i++){
        console.log(arr[i])
    }
}
printArray(['a','b','c','d','e'])