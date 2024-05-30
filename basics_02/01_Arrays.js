//Arrays
let myarr = [1,2,3,4,5]
// console.log(myarr[0])


myarr.push(20)
// console.log(myarr)

myarr.pop(0)
// console.log(myarr)

myarr.unshift(11)
// console.log(myarr)

myarr.shift()
// console.log(myarr)

// console.log(myarr.indexOf(2))


let newarr = myarr.slice(1,3)
// console.log("A",myarr)
// console.log(newarr)
//splice change the original data
let newar2 = myarr.splice(1,3)
// console.log("B",myarr)
// console.log(newar2)


let marvel = ["asd","jgvhj","gfhgddf"]
let dc = ["batman","flash","superman"]
let all= marvel.push(dc)
console.log(all)

let newall = marvel.concat(dc)
console.log(newall)

let newall2 = [...marvel,...dc]
console.log(newall2)

let s1=100
let s2=200
let s3=300
console.log(Array.of(s1,s2,s3))
