import React from 'react';

export default function MovieCover(props) {
  const { data } = props;
  const coverImage = data.images && data.images.medium ? `url(${data.images.medium})` : 'none';
  return (
    <div className="ocn-movie-cover">
      <div className="cover" style={{ backgroundImage: coverImage }} />
      <div className="title">{data.title}</div>
    </div>
  );
}
