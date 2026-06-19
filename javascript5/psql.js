// 1 bir  sekund kutib xabar chiqrish 

const waitMessage = new Promise((resolve) => {
    setTimeout(() => resolve("yuklab olindi"), 1000)
})

.then((data) => console.log(data));


// 2 yoshni tekshirish funcksya

function checkAge(age) {


    return new Promise((resolve, reject) => {
        if (age < 18) {
            reject("yosh yetarli emas")
        } else {
            resolve("Xush kelibsiz")
        }
    })
}

checkAge(20)
.then((data) => console.log(data))
.catch((err) => console.log(err))


// 3 internet tekshrihs funcskiya

function checkInternet(speed) {
    return new Promise((resolve, reject) => {
        if (speed > 10) {
            resolve("internet yaxshi ishlayabdi")
        } else {
            reject("internet ishlamayabdi")
        }
    })
}

checkInternet(1)
.then((data) => console.log(data))
.catch((err) => console.log(err))
.finally(() => console.log("natija tugadi"));



// 4 user object

const user = new Promise((resolve) => {
    resolve({ 
        name: "Ali",
        age: 22
    })
})

user
.then((data) => console.log(`${data.name} ${data.age} yoshda`));


// 5 sinab korish 



function checkPassword(password) {
    return new Promise((resolve, reject) => {
        if (password.length >= 6) {
            resolve("parol togri chiqdi")
        } else {
            reject("parol qisqa")
        }
    })
}


checkPassword("123456")
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

checkPassword("123")
    .then((data) => console.log(data))
    .catch((err) => console.log(err))




    // 6   id boyicha topish 

    const products = [
    { id: 1, name: "Monitor", price: 2500000 },
    { id: 2, name: "Klaviatura", price: 150000 },
    { id: 3, name: "Sichqoncha", price: 80000 }
]


function getProduct(id) {
    return new Promise((resolve, reject) => {
        const product  = products.find((item) => item.id === id);
        
        
        if (product) {
            resolve(product);
        } 
        
        
        else {
            reject("Mahsulot topilmadi");
        }
    });
} 


// 7 login yozish

function login(email, password) {
    return new Promise((resolve, reject) => {
          if (email === "admin@uz.com" && password === "1234") {
            resolve("kirsh muffaqiyatli")
          } else {
            reject("email yoki parol xato")
          }
    })
}


login("admin@uz.com", "1234")
    .then((data) => console.log(data))
    .catch((err) => console.log(err))


    // 8. Sonni 3 ga kopaytirish

new Promise((resolve) => {
    resolve(5)
})
    .then((num) => console.log(num * 3))
// 9. Malumot yuklash

function getData() {
    console.log("Yuklanmoqda...")

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Ali", "Vali", "Guli"])
        }, 1500)
    })
}

getData()
    .then((data) => console.log(data))
// 10. Fayl ochish

function openFile(fileName) {
    return new Promise((resolve, reject) => {
        if (fileName === "mavjud.txt") {
            resolve("Fayl ochildi!")
        } else {
            reject(new Error("Fayl topilmadi!"))
        }
    })
}

openFile("mavjud.txt")
    .then((data) => console.log(data))
    .catch((err) => console.log(err.message))
// 11. Juft yoki toq son

function isEvenOrAdd(number) {
    return new Promise((resolve) => {
        if (number % 2 === 0) {
            resolve(`Juft son: ${number}`)
        } else {
            resolve(`Toq son: ${number}`)
        }
    })
}

isEvenOrAdd(7)
    .then((data) => console.log(data))


// 12. Pul otkazish

function transferMoney(balance, amount) {
    return new Promise((resolve, reject) => {
        if (amount < 0) {
            reject("Miqdor notogri")
        } else if (amount > balance) {
            reject("Balans yetarli emas")
        } else {
            resolve(balance - amount)
        }
    })
}

transferMoney(1000, 300)
    .then((data) => console.log(`Yangi balans: ${data}`))
    .catch((err) => console.log(err))