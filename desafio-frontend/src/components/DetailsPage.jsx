import React, { useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';
import { slugFetch } from '../service';
import CardDetails from './CardDetails';

const DetailsPage = ({ slug }) => {
  const { singlePost, setSinglePost} = useContext(MyContext);

  useEffect(() => {
    async function fetchAPI() {
      const fetchWithSlug = await slugFetch(slug);

      setSinglePost(fetchWithSlug);
    } 

    fetchAPI();
  }, [])

  return (
    <section>
      { singlePost.map((post) => (
        <CardDetails post={ post } />
      )) }
    </section>
  )
}

export default DetailsPage;