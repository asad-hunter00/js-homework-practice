// 1

const greet = (name) => {
    return `Salom ${name} Javascriptga xush kelibsiz!`
}

console.log(greet("Asadbek"));




// 2

const isEven = (number) => {
    return number % 2 == 0
}

console.log(isEven(1));
console.log(isEven(3));
console.log(isEven(10));


// 3 Qilinmadi


const mathOperations = []





// 4

const price = [10, 25, 5, 80, 45];


const pricenew = price.map((price) => {
    return price * 1.2
})

console.log(pricenew);




// 5


const product = {
    name: "Laptop",
    brand: "Dell",
    money: 1200,
    inStock: true
};



const { name, brand, money, inStock } = product;


console.log(`${brand} ${name} ${money} turadi va sotuvda: ${inStock}`);




// 6



const order = {
    id: 101,
    customer: {
        namee: "Nilufar",
        phone: "998901234567"
    },
    total: 450
};

const { id, total, customer: { namee, phone } } = order;

console.log(id, total, name, phone);




// 7  Qilinmadi







// 8



const employees = [
    { name: "Kamol", department: "IT", salary: 1500 },
    { name: "Zulfiya", department: "HR", salary: 900 },
    { name: "Bobur", department: "IT", salary: 2000 },
    { name: "Madina", department: "Finance", salary: 1100 },
    { name: "Jasur", department: "IT", salary: 1800 }
];



const itenglify = (employees) => {
    return employees.filter(({ department }) => department === "IT")
    .map(({ name }) => name)
}

console.log(itenglify(employees));




// 9 Qilinmadi



