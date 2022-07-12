
async function getPost() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        let body = await response.json(); // or .json() or whatever
        return body
    } catch (err) {
        return false;
    }
}

async function getUsers() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        let users = await response.json(); // or .json() or whatever
        return users;
    } catch (err) {
        return false;
    }
}



async function showAllPosts() {
    const posts = await getPost();
    const users = await getUsers();
    const postTable = document.querySelector('#table-posts');

    if (!posts || !users) {
        const createTr = document.createElement('tr');
        createTr.textContent = 'error from server'
        postTable.appendChild(createTr)

    } else {
        for (const post of posts) {
            const createTr = document.createElement('tr');
            const createTdID = document.createElement('td')
            const createTdUserName = document.createElement('td')
            const createTdTitle = document.createElement('td')

            for (const user of users) {
                if (post.userId == user.id) {
                    createTdID.textContent = post.id
                    createTdUserName.textContent = user.name
                    createTdTitle.textContent = post.title
                    break;
                }
            }

            createTr.appendChild(createTdID)
            createTr.appendChild(createTdUserName)
            createTr.appendChild(createTdTitle)
            postTable.appendChild(createTr)
        }


    }
}



showAllPosts()



