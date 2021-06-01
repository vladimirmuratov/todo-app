export const addPostApi = async (id, text) => {
    const response = await fetch('https://posts-372b0-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id, text})
        })
    return await response.json()
}

export const fetchPostsApi = async () => {
    const response = await fetch('https://posts-372b0-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })

    return await response.json()
}