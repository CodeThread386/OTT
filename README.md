[Live Demo](https://ott-git-main-sarthak-trivedis-projects.vercel.app/)

# WEB BINGE

WEB BINGE is a responsive React single-page application for browsing **TV shows** and **movies**. It includes a dynamic **watchlist**, a **modal details view**, and a **details page** with an embedded video and suggestions.

## Features

- Responsive UI (desktop/tablet/mobile) using custom CSS
- Browse sections: **Top TV Shows** and **Top Movies**
- Filter by **minimum star rating** (0.0 to 5.0) with numeric input
- Click any card to open a **modal** with title, year, runtime/director, and an extended description
- Add/remove/clear items in **My Watchlist** (persisted in `localStorage`)
- Click **Watch Now** to navigate to the `/details` page
- `/details` page shows an embedded video, extended description, and a suggestions list

## Tech Stack

- React (component-based UI + state handling)
- React Router DOM (navigation between main page and details page)
- Vite (build tooling)
- HTML + CSS (semantic structure + styling/responsiveness)
- JavaScript (dynamic behavior: filtering, modal, watchlist, persistence)

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run in development mode:

   ```bash
   npm run dev
   ```

3. Build the production bundle:

   ```bash
   npm run build
   ```

4. (Optional) Preview the production build:

   ```bash
   npm run preview
   ```

## Usage

- **Filter**: Set “Minimum stars” (0.0 - 5.0). Cards update instantly.
- **Add to Watchlist**:
  - Type a title in **My Watchlist** and click **Add Movie**.
  - If the title matches an existing item, the full details are added; otherwise a new placeholder entry is created.
- **Remove/Clear**:
  - Click **Remove** on a watchlist card.
  - Click **Clear All** to empty the watchlist.
- **Details**:
  - Click a card to open the modal.
  - Click **Watch Now** to go to the full details page.

## Project Structure

- `index.html` - app root HTML
- `src/main.jsx` - React bootstrap
- `src/App.jsx` - routes + watchlist persistence
- `src/pages/` - `MainPage.jsx`, `DetailsPage.jsx`
- `src/components/` - `Navbar`, `MovieCard`, `Modal`, `Notification`, etc.
- `src/data/` - seed media data
- `src/utils/` - helper functions
- `src/style.css` - styling
