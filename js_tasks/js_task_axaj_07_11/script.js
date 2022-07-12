
async function getPost() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (!response.ok)
            throw new Error("HTTP error " + response.status);
        let body = await response.json(); // or .json() or whatever
        return body
    } catch (err) {
        console.log(err)
    }
}

async function showAllPosts() {
    const posts = await getPost();
    const postTable = document.querySelector('#table-posts');

    for (const post of posts) {

        const createTr = document.createElement('tr');
        const createTdID = document.createElement('td')
        const createTdUserId = document.createElement('td')
        const createTdTitle = document.createElement('td')
    
        createTdID.textContent = post.id
        createTdUserId.textContent = post.userId
        createTdTitle.textContent = post.title

        createTr.appendChild(createTdID)
        createTr.appendChild(createTdUserId)
        createTr.appendChild(createTdTitle)
        postTable.appendChild(createTr)
    }

}

showAllPosts()



