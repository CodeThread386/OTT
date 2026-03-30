export function parseRatingScore(rating) {
  if (!rating || rating === 'N/A') return NaN;
  const m = String(rating).match(/(\d+(?:\.\d+)?)/);
  return m ? parseFloat(m[1]) : NaN;
}

export function itemPassesMinRating(item, minRating) {
  if (minRating <= 0) return true;
  const s = parseRatingScore(item.rating);
  if (Number.isNaN(s)) return false;
  return s >= minRating;
}

export function buildGenreRows(items, minPerGenre = 2) {
  const map = new Map();
  for (const item of items) {
    String(item.genres)
      .split(',')
      .map((g) => g.trim())
      .filter(Boolean)
      .forEach((g) => {
        if (!map.has(g)) map.set(g, []);
        map.get(g).push(item);
      });
  }
  return [...map.entries()]
    .map(([genre, arr]) => {
      const seen = new Set();
      const unique = arr.filter((it) => {
        if (seen.has(it.title)) return false;
        seen.add(it.title);
        return true;
      });
      return [genre, unique];
    })
    .filter(([, arr]) => arr.length >= minPerGenre)
    .sort((a, b) => b[1].length - a[1].length);
}

export function genreSectionId(genre) {
  const slug = genre
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
  return `genre-${slug || 'other'}`;
}
