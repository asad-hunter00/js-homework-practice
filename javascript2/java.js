// 1 uchta arrow funcksiya

const add = (a, b) => a + b
const greet = (name) => `Hello, ${name}!`
const square = (n) => n * n


console.log(add(4, 3));
console.log(greet("Asadbek"));
console.log(square(7));


// 2 template literal orqali so'z yasash

const user = {
  name: "Asadbek",
  age: 14,
  city: "Jizzakh",
  job: "Developer",
  hobby: "Read"
}


const { name, age, city } = user

console.log(`${name} is ${age} years old and lives in ${city}`);



// 3 array destructuring


const people = ["Nodir", "Sardor", "Umar", "Muhammad", "Jasur"];


const [one, two, , four] = people;


console.log(`Gold: ${one}  Silver: ${two}  4th place: ${four}`);




// 4 map filter va find ishlatish



const products = [
  { name: "Laptop",  price: 1200, inStock: true  },
  { name: "Phone",   price: 800,  inStock: false },
  { name: "Tablet",  price: 500,  inStock: true  },
  { name: "Monitor", price: 300,  inStock: true  },
];

const names = products.map(products => products.name);

const available = products.filter(products => products.inStock === true);

const tablet = products.find(products => products.name === "Tablet");

console.log(names);

console.log(available);
console.log(tablet);


// 5 to'g'ri destructuring qilish



const employee = {
  name: "Nodira",
  department: "Design",
  address: {
    city: "Samarkand",
    zip: "140100"
  }
};

const {
  name: twoName,
  address: { city: twoCity, zip }
} = employee;

console.log(`${name} lives in ${city}, ${zip}`);



// 6 new destructuring qilish



const apiResponse = {
  usr: "admin",
  pwd: "1234",
  tok: "abc-xyz-token"
};

const { usr: username, pwd: password, tok: token } = apiResponse;


console.log(`Logged in as ${username} with token ${token}`);


// 7 return keyword yozmasdan



const double = n => n * 2;

const fullName = (first, last) => `${first} ${last}`;

const isAdult = age => age >= 18;

console.log(double(5));
console.log(fullName("Ali", "Valiyev"));
console.log(isAdult(20));


// 8 funksiya parametrlarida to'g'ridan-to'g'ri destructuring qilish



const displayProduct = ({ name, price }) => {
  console.log(`${name} costs $${price}`);
};

displayProduct({
  name: "Laptop",
  price: 1200
});
