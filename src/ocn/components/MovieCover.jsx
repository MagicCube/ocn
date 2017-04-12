import React from 'react';

import '../res/movie-cover.less';

export default function MovieCover(props) {
  const { data, displayTitle } = props;
  return (
    <div className="ocn-movie-cover" style={{ backgroundImage: `url(${data.img})` }}>
      {displayTitle ? <div className="title">{data.title}</div> : null}
    </div>
  );
}
