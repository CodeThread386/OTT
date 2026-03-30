import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MOBILE_BREAKPOINT = 669;

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const hamburgerRef = useRef(null);
  const menuRef = useRef(null);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((o) => !o);
  }, []);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= MOBILE_BREAKPOINT) {
        setMenuOpen(false);
      }
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    function onDocClick(event) {
      const h = hamburgerRef.current;
      const m = menuRef.current;
      if (
        window.innerWidth < MOBILE_BREAKPOINT &&
        h &&
        m &&
        !h.contains(event.target) &&
        !m.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  const hamburgerClass = menuOpen ? 'hamburger active' : 'hamburger';
  const menuClass = menuOpen ? 'navbar-menu active' : 'navbar-menu';

  const scrollToId = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleHome = (e) => {
    closeMenu();
    if (location.pathname === '/') {
      e.preventDefault();
      scrollToId('home');
    }
  };

  const handleSectionNav = (hashId) => (e) => {
    closeMenu();
    if (location.pathname === '/') {
      e.preventDefault();
      scrollToId(hashId);
    }
  };

  return (
    <div className="navbar" id="navbar">
      <div className="navbar-logo">WEB BINGE</div>

      <div
        ref={hamburgerRef}
        className={hamburgerClass}
        id="hamburger"
        role="button"
        tabIndex={0}
        aria-expanded={menuOpen}
        aria-label="Menu"
        onClick={(e) => {
          e.stopPropagation();
          toggleMenu();
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMenu();
          }
        }}
      >
        <span />
        <span />
        <span />
      </div>

      <div ref={menuRef} className={menuClass} id="navbar-menu">
        <Link to="/" onClick={handleHome}>
          Home
        </Link>
        <Link to={{ pathname: '/', hash: 'tvshows' }} onClick={handleSectionNav('tvshows')}>
          TV Shows
        </Link>
        <Link to={{ pathname: '/', hash: 'movies' }} onClick={handleSectionNav('movies')}>
          Movies
        </Link>
        <Link to={{ pathname: '/', hash: 'mylist' }} onClick={handleSectionNav('mylist')}>
          My List
        </Link>
      </div>
    </div>
  );
}
