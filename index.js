// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"


async function main(){
    const users = await fetch("https://jsonplaceholder.typicode.com/users")
    const usersData = await users.json()
    render(usersData)
}

function showUserPosts(id){
    localStorage.setItem("id", id)
    window.location.href = `${window.location.origin}/user.html`
}

function render(usersData){
    const userCardWrapper = document.querySelector(".user")
    console.log(usersData)
    const usersHtml = usersData.map((users) => {
        return `<div class="user-card" onclick="showUserPosts(${users.id})">
        <div class="user-card__container">
            <h3>${users.name}</h4>
            <p><b>Email:</b> ${users.email}</p>
            <p><b>Phone:</b> ${users.phone}</p>
            <p><b>Website:</b> <a href="https://${users.website}" target="_blank">${users.website}</a></p>
        </div>
        </div>`
    })
    userCardWrapper.innerHTML += usersHtml.join("")
}

main()