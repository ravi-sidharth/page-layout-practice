const input=require("readline-sync")
let n=input.questionInt("Enter a number of terms:")

let factorial =1

for (let i =1; i<=n; i++){
    factorial*=i
}
console.log(factorial)

