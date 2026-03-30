import PropTypes from 'prop-types';

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

export default function MovieCard({ item, onOpen }) {
  return (
    <div
      className="movie-card"
      role="button"
      tabIndex={0}
      onClick={() => onOpen(item)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpen(item);
        }
      }}
    >
      <img src={item.image} alt={item.title} />
      <div className="movie-info">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  item: mediaItemShape.isRequired,
  onOpen: PropTypes.func.isRequired,
};
