const lastTenBlogPosts = () => fetch('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518')
  .then((response) => response.json())
  .then((data) => data)
  .catch((error) => {
    throw error
  });

export default lastTenBlogPosts;
