import { load } from "cheerio";

export function extractMetadata(html: string) {
  const $ = load(html);

  return {
    title: $("title").text(),
    headings: $("h1, h2, h3")
      .map((_, el) => $(el).text())
      .get(),
    imagesWithoutAlt: $("img:not([alt])").length,
  };
}