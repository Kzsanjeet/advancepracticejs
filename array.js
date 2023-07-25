let list1 = [1,2,3,4,5,6,7,8]
for (let i = 0; i< list1.length; i++){
    console.log(i)
}

let num = [1,2,3,4,5]
let c = num.join('-')// it add a '-' to a element like 2-3-4-5-6
console.log(c)
console.log(num)
let st = num.toString()
console.log(st)
let pop  = num.pop() //delete the last element of the array
console.log(num,pop)
let j = num.push(99) // add the last element in the array
console.log(num,j)
let s = num.shift()//delete the first element in the array
console.log(num,s)
let p = num.push(89)
console.log(num)
let sh = num.unshift(1)//add the first element in the array
console.log(num)
