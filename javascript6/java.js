const api = "https://6a3699be766b831960f9638e.mockapi.io/contacts";

const cards = document.getElementById("cards");
const form = document.getElementById("form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const companyInput = document.getElementById("company");
const avatarInput = document.getElementById("avatar");

let editId = null;

function getContacts() {
    fetch(api)
        .then(res => res.json())
        .then(data => {
            cards.innerHTML = "";

            data.forEach(contact => {
                cards.innerHTML += `
                    <div class="card">
                        <img src="${contact.avatar}" alt="">
                        <h3>${contact.name}</h3>
                        <p>${contact.email}</p>
                        <p>${contact.phone}</p>
                        <p>${contact.company}</p>

                        <div class="btns">
                            <button class="edit" onclick="editContact('${contact.id}')">
                                Edit
                            </button>

                            <button class="delete" onclick="deleteContact('${contact.id}')">
                                Delete
                            </button>
                        </div>
                    </div>
                `;
            });
        });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const contact = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        company: companyInput.value,
    };

    if (editId) {
        fetch(`${api}/${editId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contact)
        })
        .then(() => {
            getContacts();
            form.reset();
            editId = null;
        });

        return;
    }

    fetch(api, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
    })
    .then(res => res.json())
    .then(() => {
        getContacts();
        form.reset();
    });
});

function deleteContact(id) {
    fetch(`${api}/${id}`, {
        method: "DELETE"
    })
    .then(() => getContacts());
}

function editContact(id) {
    fetch(`${api}/${id}`)
        .then(res => res.json())
        .then(contact => {
            nameInput.value = contact.name;
            emailInput.value = contact.email;
            phoneInput.value = contact.phone;
            companyInput.value = contact.company;
            avatarInput.value = contact.avatar;

            editId = id;
        });
}

getContacts();