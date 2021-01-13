import React from 'react';

const CardDetails = ({ post }) => {
  const {
    id, _embedded, slug, title: { rendered }, content
  } = post;
  const embedded = _embedded["wp:featuredmedia"][0];

  return (
    <section key={id} className="details">
      <div className="title">
        <img src={embedded.source_url} width="600px" alt={slug} />
        <h1>{rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
      </div>
    </section>
  )
}

export default CardDetails;