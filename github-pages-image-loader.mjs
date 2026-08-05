export default function githubPagesImageLoader({ src, width, quality }) {
  if (src.startsWith("http://") || src.startsWith("https://")) {
    const url = new URL(src);
    if (url.hostname === "images.pexels.com") {
      url.searchParams.set("w", String(width));
      if (quality) url.searchParams.set("q", String(quality));
    }
    return url.toString();
  }

  return src.startsWith("/") ? src : `/${src}`;
}
