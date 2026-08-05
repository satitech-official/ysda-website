const configuredBasePath = String(process.env.GITHUB_PAGES_BASE_PATH ?? "").trim();
const basePath =
  !configuredBasePath || configuredBasePath === "/"
    ? ""
    : `/${configuredBasePath.replace(/^\/+|\/+$/g, "")}`;

export default function githubPagesImageLoader({ src, width, quality }) {
  if (src.startsWith("http://") || src.startsWith("https://")) {
    const url = new URL(src);
    if (url.hostname === "images.pexels.com") {
      url.searchParams.set("w", String(width));
      if (quality) url.searchParams.set("q", String(quality));
    }
    return url.toString();
  }

  const normalizedSrc = src.startsWith("/") ? src : `/${src}`;
  return `${basePath}${normalizedSrc}`;
}
