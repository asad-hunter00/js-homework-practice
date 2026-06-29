const API_LINK = 'https://6a3699be766b831960f9638e.mockapi.io/movies';


const search = document.getElementById("search");
const genre = document.getElementById("genre");
const sort = document.getElementById("sort");
const counter = document.getElementById("counter");
const list = document.getElementById("list");
const total = document.getElementById("total");
const completed = document.getElementById("completed");
const minutes = document.getElementById("minutes");
const overlay = document.getElementById("overlay");
const modalTitle = document.getElementById("modal-title");
const btnSave = document.getElementById("btn-save");
const fTitle = document.getElementById("f-title");
const fGenre = document.getElementById("f-genre");
const fYear = document.getElementById("f-year");
const fRating = document.getElementById("f-rating");
const fStatus = document.getElementById("f-status");
const fPoster = document.getElementById("f-poster");
const fNotes = document.getElementById("f-notes");
const navItems = document.querySelectorAll(".item");
const addBtn = document.getElementById("add-btn");
const closeBtn = document.querySelector(".modal-close");
const cancelBtn = document.querySelector(".btn-cancel")


let editId = null

let movies = []
let currentStatus = "All Movies";


cancelBtn.onclick = () => {
    overlay.style.display = "none";
}


addBtn.onclick = () => {
    overlay.style.display = "flex";
}

closeBtn.onclick = () => {
    overlay.style.display = "none";
}






async function getMovie() {

    const res = await fetch(API_LINK);
    movies = await res.json();


    console.log(movies);

    filterMovies();
}


function getHtml(data) {
    list.innerHTML = "";

    data.forEach(item => {
        list.innerHTML += `
<div class="movie-row">
    <span>${item.title}</span>
    <span>${item.genre}</span>
    <span>${item.year}</span>
    <span>${item.rating}</span>
    <span>${item.status}</span>

    <div class="actions">
        <button onclick="editMovie('${item.id}')">Edit</button>
        <button onclick="deleteMovie('${item.id}')">Delete</button>
    </div>
</div>
`;
    });
}





function filterMovies() {
    let filtered = movies;

    if (search.value.trim()) {
        filtered = filtered.filter(item =>
            item.title.toLowerCase().includes(
                search.value.toLowerCase()
            )
        );
    }

    if (genre.value !== "all") {
        filtered = filtered.filter(item =>
            item.genre === genre.value
        );
    }

    if (currentStatus !== "All Movies") {
        filtered = filtered.filter(item =>
            item.status === currentStatus
        );
    }





    getHtml(filtered);
}



async function addMovie() {
    const movie = {
        title: fTitle.value,
        genre: fGenre.value,
        year: fYear.value,
        rating: fRating.value,
        status: fStatus.value,
        poster: fPoster.value,
        notes: fNotes.value
    };


    if (editId) {
        await fetch(`${API_LINK}/${editId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(movie)
        })
    } else {
        await fetch(API_LINK, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(movie)
        })
    }

    fTitle.value = "";
    fGenre.value = "Action";
    fYear.value = "";
    fRating.value = "";
    fStatus.value = "Plan to Watch";
    fPoster.value = "";
    fNotes.value = "";


    overlay.style.display = "none";
    editId = null;

    getMovie()

}


async function deleteMovie(id) {
    await fetch(`${API_LINK}/${id}`, {
        method: "DELETE"
    });

    getMovie();
}


async function editMovie(id) {


    const res = await fetch(`${API_LINK}/${id}`);
    const movie = await res.json();

    fTitle.value = movie.title;
    fGenre.value = movie.genre;
    fYear.value = movie.year;
    fRating.value = movie.rating;
    fStatus.value = movie.status;
    fPoster.value = movie.poster;
    fNotes.value = movie.notes;


    overlay.style.display = "flex"

    editId = id

}




navItems.forEach(item => {
    item.onclick = () => {
        currentStatus = item.children[0].textContent;

        console.log(currentStatus);

        filterMovies();
    };
});



search.oninput = filterMovies;
genre.onchange = filterMovies;

getMovie()