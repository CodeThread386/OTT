export function toWatchlistEntry(item) {
  return {
    title: item.title,
    image: item.image,
    description: item.description,
    year: item.year,
    rating: item.rating,
    genres: item.genres,
    runtime: item.runtime || '',
    director: item.director || '',
    videoURL: item.videoURL,
    bigDes: item.bigDes || '',
  };
}

export function buildModalDescription(item) {
  if (!item) return '';
  let t = item.description || '';
  if (item.runtime) t += `\nRuntime: ${item.runtime}`;
  if (item.director) t += ` | Director: ${item.director}`;
  if (item.bigDes) t += `\n\n${item.bigDes}`;
  return t;
}
