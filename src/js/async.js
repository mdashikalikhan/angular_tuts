
async function fetchUserAndPosts(userId){
    try{
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

        const user = await userResponse.json();

        console.log(user);

        const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

        const posts = await postResponse.json();

        console.log("Posts: ", posts.slice(0,2));

    } catch(err){
        console.log(err);
    }


}

fetchUserAndPosts(5);





