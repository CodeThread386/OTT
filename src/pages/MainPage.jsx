import { useState, useEffect, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { tvShows, movies, suggestionsData } from '../data/media';
import MovieCard from '../components/MovieCard';
import Modal from '../components/Modal';
import { itemPassesMinRating } from '../utils/catalogHelpers';

export default function MainPage({
  watchlist,
  addToWatchlist,
  removeFromWatchlist,
  clearWatchlist,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const [watchlistInput, setWatchlistInput] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState(null);
  const [minRating, setMinRating] = useState(0);
  const [minRatingInput, setMinRatingInput] = useState('');

  const filteredTv = useMemo(
    () => tvShows.filter((item) => itemPassesMinRating(item, minRating)),
    [minRating]
  );
  const filteredMovies = useMemo(
    () => movies.filter((item) => itemPassesMinRating(item, minRating)),
    [minRating]
  );

  useEffect(() => {
    const id = location.hash?.replace('#', '');
    if (id) {
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }, [location.hash, location.pathname]);

  const openModal = (item) => {
    setModalItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const addMovieManually = () => {
    const title = watchlistInput.trim();
    if (!title) return;

    const found = suggestionsData.find((item) => item.title.toLowerCase() === title.toLowerCase());
    if (found) {
      addToWatchlist(found);
    } else {
      // Convert the previous 0-10 style number to 0-5 stars, rounded to 1 decimal.
      const randomRating = Number((2.6 + Math.random() * 1.9).toFixed(1));
      addToWatchlist({
        title,
        image: 'https://picsum.photos/220/330?random',
        description: 'User added movie',
        year: 'N/A',
        rating: randomRating,
        genres: 'N/A',
        runtime: '',
        director: '',
        videoURL: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        bigDes: '',
      });
    }
    setWatchlistInput('');
  };

  return (
    <>
      <div id="main-content">
        <section className="hero" id="home">
          <div className="hero-content">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <p>Watch anywhere. Watch anytime.</p>
          </div>
        </section>

        <div className="section rating-filter-section" id="browse">
          <div className="rating-filter-bar">
            <label htmlFor="rating-filter">Minimum stars</label>
            <input
              id="rating-filter"
              value={minRatingInput}
              className="rating-filter-select"
              type="number"
              min={0}
              max={5}
              step={0.1}
              placeholder="0.0 - 5.0"
              onChange={(e) => {
                const v = e.target.value;
                setMinRatingInput(v);
                // Keep filtering numeric, but allow the input field to be empty.
                setMinRating(v === '' ? 0 : Number(v));
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  e.currentTarget.blur();
                }
              }}
              onBlur={() => {
                if (minRatingInput === '') setMinRating(0);
              }}
            />
          </div>
        </div>

        <div className="section" id="tvshows">
          <h2>Top TV Shows</h2>
          {filteredTv.length === 0 ? (
            <p className="row-empty">No TV shows match this rating filter.</p>
          ) : (
            <div className="row" id="tvshows-row">
              {filteredTv.map((item) => (
                <MovieCard key={item.title} item={item} onOpen={openModal} />
              ))}
            </div>
          )}
        </div>

        <div className="section" id="movies">
          <h2>Top Movies in India</h2>
          {filteredMovies.length === 0 ? (
            <p className="row-empty">No movies match this rating filter.</p>
          ) : (
            <div className="row" id="movies-row">
              {filteredMovies.map((item) => (
                <MovieCard key={item.title} item={item} onOpen={openModal} />
              ))}
            </div>
          )}
        </div>

        <div className="watchlist" id="mylist">
          <h2>My Watchlist</h2>
          <div className="watchlist-controls">
            <input
              type="text"
              id="watchlistInput"
              placeholder="Add a new movie (Title)"
              value={watchlistInput}
              onChange={(e) => setWatchlistInput(e.target.value)}
            />
            <button type="button" className="btn" onClick={addMovieManually}>
              Add Movie
            </button>
            <button type="button" className="btn btn-clear-all" onClick={clearWatchlist}>
              Clear All
            </button>
          </div>

          <div className="watchlist-items" id="watchlistItems">
            {watchlist.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="watchlist-card"
                role="button"
                tabIndex={0}
                onClick={() =>
                  openModal({
                    title: item.title,
                    image: item.image,
                    description: item.description,
                    year: item.year,
                    rating: item.rating,
                    genres: item.genres,
                    runtime: item.runtime,
                    director: item.director,
                    videoURL: item.videoURL,
                    bigDes: item.bigDes,
                  })
                }
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openModal({
                      title: item.title,
                      image: item.image,
                      description: item.description,
                      year: item.year,
                      rating: item.rating,
                      genres: item.genres,
                      runtime: item.runtime,
                      director: item.director,
                      videoURL: item.videoURL,
                      bigDes: item.bigDes,
                    });
                  }
                }}
              >
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <button
                  type="button"
                  style={{ marginTop: '5px' }}
                  className="btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFromWatchlist(index);
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal
        item={modalItem}
        open={modalOpen}
        onClose={closeModal}
        onWatchNow={() => {
          if (modalItem) {
            window.scrollTo(0, 0);
            navigate('/details', { state: { item: modalItem } });
            setModalOpen(false);
          }
        }}
        onAddToWatchlist={addToWatchlist}
      />
    </>
  );
}