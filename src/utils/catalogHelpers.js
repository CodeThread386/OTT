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
