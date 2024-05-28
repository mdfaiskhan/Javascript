//there are two types of memories 
// Stack and Heap
let name = "Faisal "
let name1 = name;
// console.log(name)
// console.log(name1)


let userone = {
    email:"user@google.com",
    upi:"pay@icici"
}

// console.table(userone)

let user2 = userone;

// console.table(user2)

user2.email="user2@google.com"

console.log(userone)