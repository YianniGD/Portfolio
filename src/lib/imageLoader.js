// src/lib/imageLoader.js
'use client';

// This is a custom image loader for Next.js that works with static exports.
// It simply returns the original image path, which is what we need for GitHub Pages.
export default function customLoader({ src, width, quality }) {
  return `${src}?w=${width}&q=${quality || 75}`;
}
