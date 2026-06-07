import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
}

export default function useSEO({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage = "https://supplementalinstruction.com/images/default-og.png",
  ogUrl,
}: SEOProps) {
  useEffect(() => {
    // 1. Update document title safely
    const formattedTitle = title.includes("Supplemental Instruction")
      ? title
      : `${title} | Supplemental Instruction LLC`;
    document.title = formattedTitle;

    // Helper functions to find/create meta tags dynamically
    const setMetaTag = (attributeName: string, attributeValue: string, content: string) => {
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // 2. Set description
    setMetaTag("name", "description", description);

    // 3. Set Open Graph (Facebook/LinkedIn) tags
    setMetaTag("property", "og:title", ogTitle || formattedTitle);
    setMetaTag("property", "og:description", ogDescription || description);
    setMetaTag("property", "og:image", ogImage);
    setMetaTag("property", "og:url", ogUrl || window.location.href);
    setMetaTag("property", "og:type", "website");

    // 4. Set Twitter Cards tags
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", ogTitle || formattedTitle);
    setMetaTag("name", "twitter:description", ogDescription || description);
    setMetaTag("name", "twitter:image", ogImage);
  }, [title, description, ogTitle, ogDescription, ogImage, ogUrl]);
}
