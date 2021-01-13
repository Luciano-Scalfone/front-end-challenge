import React from 'react';

const PostCard = ({ post }) => {
  const { id, _embedded, slug, title: { rendered } } = post;
  const embedded = _embedded["wp:featuredmedia"][0];

  return (
    <section key={ id }>
      <img src={ embedded.source_url } width="600px" alt={ embedded.slug } />
      <h3>{ rendered }</h3>
      <button></button>
    </section>
  )
}

export default PostCard;
