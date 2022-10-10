// reading this is pretty difficalt!!
// what we call this is "callback hell"
getUser("facebook/yihuazhang", (user, error) => {
  if (error) {
    throw error;
  }
  const userId = user.id;
  getFriends(userId, (friends, error) => {
    if (error) {
      throw error;
    }
    const john = friends.find();
    getPosts(john, (posts, error) => {
      if (error) {
        throw error;
      }
      const recentPost = posts[0];
      getCommentsForPost(recentPost, (comments, error) => {
        if (error) {
          throw error;
        }
        displayComments(comments);
      });
    });
  });
});
