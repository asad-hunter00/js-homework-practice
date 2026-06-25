const api = "https://6a3699be766b831960f9638e.mockapi.io/products";



const grid = document.getElementById("grid");
const addBtn = document.getElementById("addBtn");
const closeBtn = document.getElementById("closeBtn");
const cancelBtn = document.getElementById("cancelBtn");
const saveBtn = document.getElementById("saveBtn");
const modalBg = document.getElementById("modalBg");
const modalTitle = document.getElementById("modalTitle");
const fName = document.getElementById("fName");
const fCategory = document.getElementById("fCategory");
const fPrice = document.getElementById("fPrice");
const fStock = document.getElementById("fStock");
const fImage = document.getElementById("fImage");
const fDesc = document.getElementById("fDesc");


let cur = null





addBtn.onclick = () => {
  modalBg.classList.add("show");
};


closeBtn.onclick = () => {
  modalBg.classList.remove("show");
};




cancelBtn.onclick = () => {
  modalBg.classList.remove("show");
};


async function getProducts() {

    const res = await fetch(api)
    const data = await res.json();



    grid.innerHTML = "";

    data.forEach(item => {
        grid.innerHTML += `
        <div class="card">
            <img src="${item.image}" alt="">

            <div class="card-body">
                <h3>${item.name}</h3>

                <p>${item.description}</p>

                <div class="bottom">
                    <strong>$${item.price}</strong>
                    <span>${item.stock} in stock</span>
                </div>

                <div class="actions">
                    <button onclick="editProduct('${item.id}')">
                        Edit
                    </button>

                    <button onclick="deleteProduct('${item.id}')">
                        Delete
                    </button>
                </div>
            </div>
        </div>
        `;
    });
}


getProducts()




saveBtn.onclick = async () => {
    const product = {
        name: fName.value,
        category: fCategory.value,
        price: fPrice.value,
        stock: Number(fStock.value),
        image: fImage.value,
        description: fDesc.value,
        isActive: true
    };

    if (cur) {
        await fetch(`${api}/${cur}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        });

        cur = null;
    } else {
        await fetch(api, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        });
    }

    fName.value = "";
    fCategory.value = "";
    fPrice.value = "";
    fStock.value = "";
    fImage.value = "";
    fDesc.value = "";

    modalBg.classList.remove("show");

    getProducts();
};

async function deleteProduct(id) {
    await fetch(`${api}/${id}`, {
        method: "DELETE"
    });

    getProducts();
}

async function editProduct(id) {
    const res = await fetch(`${api}/${id}`);
    const data = await res.json();

    cur = id;

    fName.value = data.name;
    fCategory.value = data.category;
    fPrice.value = data.price;
    fStock.value = data.stock;
    fImage.value = data.image;
    fDesc.value = data.description;

    modalBg.classList.add("show");
}