fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const firstUser = users[0];
    return fetch(
      "https://jsonplaceholder.typicode.com/posts?userId" + firstUser.id
    );
  })
  .then((response) => response.json())
  .then((posts) => console.log(posts))
  .catch((error) => console.log(error));

const myAsyncFunction = async () => {
  try {
    const usersResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    // any code followings are waiting until the above has done
    const users = await usersResponse.json();
    const secondUser = users[1];
    const postsReponse = fetch(
      "https://jsonplaceholder.typicode.com/posts?userId" + secondUser.id
    );
    const posts = await postsReponse.json();
    console.log(posts);
  } catch (err) {
    console.log(err);
  }
};
