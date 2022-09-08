

async function main(){
    const id = localStorage.getItem("id")
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const postsData = await posts.json()
    render(postsData)
}

function render(postsData){
    const postListWrapper = document.querySelector(".post-list")
    const postHtml = postsData.map(posts => {
        return `<div class="post">
            <div class="post__title">
            ${posts.title}
            </div>
            <p class="post__body">
            ${posts.body}
            </p>
        </div>`
    })
    postListWrapper.innerHTML = postHtml.join("")
}

async function onSearchChange(event){
    const id = event.target.value
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const postsData = await posts.json()
    render(postsData)
}

main()