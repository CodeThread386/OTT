import { useState, useEffect, useCallback, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Notification from './components/Notification';
import MainPage from './pages/MainPage';
import DetailsPage from './pages/DetailsPage';
import { toWatchlistEntry } from './utils/mediaHelpers';
import './style.css';

const STORAGE_KEY = 'web-binge-watchlist';

function loadWatchlist() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export default function App() {
  const [watchlist, setWatchlist] = useState(loadWatchlist);
  const [notification, setNotification] = useState({ message: '', visible: false });
  const notifyTimerRef = useRef(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(watchlist));
  }, [watchlist]);

  const showNotification = useCallback((message) => {
    if (notifyTimerRef.current) window.clearTimeout(notifyTimerRef.current);
    setNotification({ message, visible: true });
    notifyTimerRef.current = window.setTimeout(() => {
      setNotification((n) => ({ ...n, visible: false }));
      notifyTimerRef.current = null;
    }, 3000);
  }, []);

  const addToWatchlist = useCallback(
    (item) => {
      const entry = toWatchlistEntry(item);
      setWatchlist((prev) => {
        if (prev.some((i) => i.title === entry.title)) {
          queueMicrotask(() => showNotification(`${entry.title} is already in your Watchlist!`));
          return prev;
        }
        queueMicrotask(() => showNotification(`${entry.title} added to Watchlist!`));
        return [...prev, entry];
      });
    },
    [showNotification]
  );

  const removeFromWatchlist = useCallback((index) => {
    setWatchlist((prev) => {
      const next = [...prev];
      next.splice(index, 1);
      return next;
    });
  }, []);

  const clearWatchlist = useCallback(() => {
    setWatchlist([]);
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Notification message={notification.message} visible={notification.visible} />
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              watchlist={watchlist}
              addToWatchlist={addToWatchlist}
              removeFromWatchlist={removeFromWatchlist}
              clearWatchlist={clearWatchlist}
            />
          }
        />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
      <footer>
        <p>WEB BINGE © 2026. Built with ♥ for Web Programming Lab Project</p>
      </footer>
    </BrowserRouter>
  );
}
