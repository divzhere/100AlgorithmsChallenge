function addTwoDigits(n: any): number {
let a =  n.toString().split("")
let a1 = parseInt(a[0])
let a2= parseInt(a[1])
return a1 + a2 
}

console.log(addTwoDigits(29));