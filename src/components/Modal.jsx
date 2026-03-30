import PropTypes from 'prop-types';
import { buildModalDescription } from '../utils/mediaHelpers';

const mediaItemShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  videoURL: PropTypes.string.isRequired,
  bigDes: PropTypes.string,
  runtime: PropTypes.string,
  director: PropTypes.string,
});

export default function Modal({ item, open, onClose, onWatchNow, onAddToWatchlist }) {
  if (!item) return null;

  const descriptionText = buildModalDescription(item);

  return (
    <div
      id="modal"
      className="modal"
      style={{ display: open ? 'flex' : 'none' }}
      role="presentation"
      onClick={(e) => {
        if (e.target.id === 'modal') onClose();
      }}
    >
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="close" role="button" tabIndex={0} onClick={onClose} onKeyDown={(e) => e.key === 'Enter' && onClose()}>
          &times;
        </span>
        <div className="modal-body">
          <img id="modal-poster" src={item.image} alt="Poster" />
          <div className="modal-info">
            <h1 id="modal-title">{item.title}</h1>
            <div className="metadata">
              <span id="modal-year">{item.year}</span>
              <span id="modal-rating">{item.rating}</span>
              <span id="modal-genres">{item.genres}</span>
            </div>
            <p id="modal-description">{descriptionText}</p>
            <div className="modal-buttons">
              <button type="button" className="btn watch-now" onClick={onWatchNow}>
                Watch Now
              </button>
              <button
                type="button"
                className="btn"
                id="modal-add-button"
                onClick={() => {
                  onAddToWatchlist(item);
                  onClose();
                }}
              >
                Add to Watchlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  item: mediaItemShape,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onWatchNow: PropTypes.func.isRequired,
  onAddToWatchlist: PropTypes.func.isRequired,
};
