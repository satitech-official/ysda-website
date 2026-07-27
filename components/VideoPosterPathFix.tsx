"use client";

import { useEffect } from "react";

type VideoPosterPathFixProps = {
  basePath: string;
};

export default function VideoPosterPathFix({ basePath }: VideoPosterPathFixProps) {
  useEffect(() => {
    if (!basePath) return;

    const fixVideoPosters = () => {
      document.querySelectorAll<HTMLVideoElement>("video[poster]").forEach((video) => {
        const poster = video.getAttribute("poster");

        if (
          !poster ||
          poster.startsWith("http://") ||
          poster.startsWith("https://") ||
          poster.startsWith(`${basePath}/`)
        ) {
          return;
        }

        if (poster.startsWith("/")) {
          video.setAttribute("poster", `${basePath}${poster}`);
        }
      });
    };

    fixVideoPosters();

    const observer = new MutationObserver(fixVideoPosters);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["poster"]
    });

    return () => observer.disconnect();
  }, [basePath]);

  return null;
}
