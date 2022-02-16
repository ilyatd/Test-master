// Get the modal
const modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// Container for posts
const posts = document.getElementById("posts");

const postsMap = new Map();

function getPosts(count) {
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((json) => {
        // {userId: 1, id: 1, title: "sunt aut facere repellat", body: "quia eto"} X 100
        let iterator = count;
        for (item of json) {
            if (!postsMap.has(item.id)) {
                if (iterator > 0) {
                    iterator--;
                } else break;
                postsMap.set(item.id, item);
                posts.append(creatItem(item));
            }
        }
        showModal();
    })
}

/**
 * Show the modal
 */
function showModal() {
    modal.hidden = false;
}

/**
 * Hide the modal
 */
function hideModal() {
    modal.hidden = true;
}

/**
 * Creat a post from posts
 * @param {Object} itemObject
 * @returns {Object}
 */
function creatItem (itemObject) {
    const item = document.createElement('div');
    item.className = 'post';
    item.innerHTML = `
        <h1>${itemObject.id}</h1>
        <h3>${itemObject.title}</h3>
        <p>${itemObject.body}</p>
    `;
    return item;
}

/**
 * Add a post
 * @param {Object} postsMap 
 * @param {Object} itemObject 
 * @param {Object} objectToInsert
 */
function addPost (postsMap, itemObject, objectToInsert) {
    postsMap.add(itemObject);
    objectToInsert.append(creatItem(itemObject));
}