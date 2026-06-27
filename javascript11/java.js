const API_LINK = 'https://6a3b6583e4a07f202e14e54b.mockapi.io/workouts'




const search = document.getElementById("search");
const level = document.getElementById("level");
const sidebar = document.getElementById("sidebar");
const addbtn = document.getElementById("addbtn");

const list = document.getElementById("list");

const showBar = document.getElementById("showBar");

const name = document.getElementById("name");
const flevel = document.getElementById("flevel");
const catgory = document.getElementById("catgory");
const duration = document.getElementById("duration");
const date = document.getElementById("date");
const writer = document.getElementById("writer");

const cancel = document.getElementById("cancel");
const save = document.getElementById("save");







let editId = null





addbtn.onclick = () => {
    showBar.style.display = "flex"
}

cancel.onclick = function () {
    showBar.style.display = "none"
}






function showData(data) {
    list.innerHTML = ""

    data.forEach(item => {
        list.innerHTML += `
<div class="card ${item.completed ? 'done' : ''}" >

    <div class="card-head">
        <h4>${item.name}</h4>
        <span>${item.difficulty}</span>
    </div>

    <p>${item.category} • ${item.duration} min</p>

    <small>${item.date}</small>

    <div class="card-btns">
        <button class="btn-check"
onclick="doneInformation('${item.id}', ${item.completed})">
    ✓
</button>

        <button class="btn-edit" onclick="editData('${item.id}')">
            Edit
        </button>

        <button class="btn-delete"
        onclick="deleteData('${item.id}')">
            Delete
        </button>
    </div>

</div>
`
    })
}

getData()





async function getData() {
    let res = await fetch(API_LINK)
    let data = await res.json()

    showData(data)
}





save.onclick = async () => {
    let obj = {
        name: name.value,
        category: catgory.value,
        difficulty: flevel.value,
        duration: duration.value,
        date: date.value,
        notes: writer.value,
        completed: false
    };


    if (editId) {
        await fetch(`${API_LINK}/${editId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })

        editId = null
    } else {
        await fetch(API_LINK, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
    }

    showBar.style.display = "none"
    getData()


}




async function deleteData(id) {
    await fetch(`${API_LINK}/${id}`, {
        method: "DELETE"
    })

    getData()
}


async function editData(id) {
    let res = await fetch(`${API_LINK}/${id}`)
    let data = await res.json()



    showBar.style.display = "flex"

    name.value = data.name
    catgory.value = data.category
    flevel.value = data.difficulty
    duration.value = data.duration
    date.value = data.date
    writer.value = data.notes

    editId = id
}



async function doneInformation(id, completed) {
    await fetch(`${API_LINK}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            completed: !completed
        })
    })

    getData()
}













