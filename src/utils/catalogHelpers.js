export function itemPassesMinRating(item, minRating) {
  if (minRating <= 0) return true;
  const rating = item?.rating;
  if (typeof rating !== 'number' || Number.isNaN(rating)) return false;
  return rating >= minRating;
}
