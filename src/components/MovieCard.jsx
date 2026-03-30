import { useState } from 'react';

function previewText(item) {
  const long = item.bigDes || item.description || '';
  if (long.length <= 160) return long;
  return `${long.slice(0, 157).trim()}…`;
}

export default function MovieCard({ item, onOpen }) {
  const [hover, setHover] = useState(false);

  const cardClass = hover ? 'movie-card movie-card--hover' : 'movie-card';

  return (
    <div
      className={cardClass}
      role="button"
      tabIndex={0}
      onClick={() => onOpen(item)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpen(item);
        }
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setHover(false);
      }}
    >
      <div className="movie-card-media">
        <img src={item.image} alt={item.title} />
        <div className="movie-card-preview" aria-hidden={!hover}>
          <span className="movie-card-preview-rating">
            {item.rating.toFixed(1)} stars
          </span>
          <span className="movie-card-preview-genres">{item.genres}</span>
          <p className="movie-card-preview-text">{previewText(item)}</p>
        </div>
      </div>
      <div className="movie-info">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  );
}
