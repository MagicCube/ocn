import React from 'react';

import '../res/movie-cover.less';

export default function MovieCover(props) {
  const { data } = props;
  return (
    <div className="ocn-movie-cover" style={{ backgroundImage: `url(${data.img})` }}>
      <div className="cover" />
    </div>
  );
}
