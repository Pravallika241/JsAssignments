const printName = name => `Hi ${name}`

console.log(printName("Pravallika"))

const printBill = (name, bill) => `Hi ${name}, please pay: ${bill}`

console.log(printBill("Pravallika", 1000))

const person = {
    name: "Noam Chomsky",
    age: 92
}

const {name: fullName, age} = person
console.log(fullName);
console.log(age);
