import React, { useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';
import lastTenBlogPosts from '../service';
import PostCard from './PostCard';

const MainPage = () => {
  const { posts, setPosts } = useContext(MyContext)

  useEffect(() => {
    async function fetchAPI() {
      const posts = await lastTenBlogPosts();

      setPosts(posts);
    }
    
    fetchAPI();
  }, [])

  return (
    <section>
      {
        posts.map((post) => (
          <PostCard post={ post } />
        ))
      }
    </section>
  )
}

export default MainPage;
