import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  const { id, _embedded, slug, title: { rendered }, excerpt } = post;
  const embedded = _embedded["wp:featuredmedia"][0];

  return (
    <section key={id} className="cards">
      <div>
        <Link to={{
          pathname: "/interna",
          slug: slug
        }}>
          <img src={embedded.source_url} width="600px" alt={slug} />
        </Link>
        <div>
          <div className="title">
            <h1>{rendered}</h1>
            <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
          </div>
          <div className="button">
            <Link to={{
              pathname: "/interna",
              slug: slug
            }}>Mais...</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PostCard;
