import { useState, useEffect, useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { suggestionsData } from '../data/media';
import { buildModalDescription } from '../utils/mediaHelpers';

function SuggestionCard({ item, onSelect }) {
  return (
    <div
      className="suggestion-card"
      role="button"
      tabIndex={0}
      onClick={() => onSelect(item)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(item);
        }
      }}
    >
      <img src={item.image} alt={item.title} />
      <h4>{item.title}</h4>
    </div>
  );
}

const mediaShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  videoURL: PropTypes.string.isRequired,
  bigDes: PropTypes.string,
  runtime: PropTypes.string,
  director: PropTypes.string,
});

SuggestionCard.propTypes = {
  item: mediaShape.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default function DetailsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const passedItem = location.state?.item;

  const [item, setItem] = useState(() => passedItem ?? null);
  const [bodyText, setBodyText] = useState(() =>
    passedItem ? buildModalDescription(passedItem) : ''
  );

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.key]);

  useEffect(() => {
    const passed = location.state?.item;
    if (!passed) {
      navigate('/', { replace: true });
      return;
    }
    setItem(passed);
    setBodyText(buildModalDescription(passed));
  }, [location.key, navigate]);

  if (!item) {
    return null;
  }

  const selectSuggestion = (s) => {
    setItem(s);
    setBodyText(`${s.description}\n${s.bigDes || ''}`);
  };

  return (
    <div id="main-content">
      <section className="details-view">
        <div className="details-container">
          <div className="left-panel">
            <div className="video-player">
              <iframe
                id="videoPlayer"
                key={item.videoURL}
                title={item.title}
                src={item.videoURL}
                allowFullScreen
              />
            </div>

            <div className="movie-info">
              <h1 id="detail-movieTitle">{item.title}</h1>
              <div className="metadata">
                <span id="detail-movieYear">{item.year}</span>
                <span id="detail-movieRating">{item.rating}</span>
                <span id="detail-movieGenres">{item.genres}</span>
              </div>
              <p id="detail-movieDescription">{bodyText}</p>
            </div>
          </div>

          <div className="right-panel">
            <h2>Suggestions</h2>
            <div className="suggestions" id="details-suggestions">
              {suggestionsData.map((s) => (
                <SuggestionCard key={s.title} item={s} onSelect={selectSuggestion} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
