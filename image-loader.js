export default function customImageLoader({ src, width, quality }) {
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://mcdonge.github.io/Bikesprojects' 
    : '';
  
  // Remove any leading slash to avoid double slashes
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src;
  
  // Handle query parameters if they exist
  const params = new URLSearchParams();
  if (width) params.set('width', width.toString());
  if (quality) params.set('quality', quality.toString());
  
  const queryString = params.toString() ? `?${params.toString()}` : '';
  
  // Ensure we don't have double slashes in the URL
  const finalUrl = `${baseUrl}/${cleanSrc}${queryString}`.replace(/([^:]\/)\/+/g, '$1');
  
  return finalUrl;
} 