import axe from "axe-core";

export async function runA11yScan(html: string) {
  const { JSDOM } = await import("jsdom");
  const dom = new JSDOM(html);

  const results = await axe.run(dom.window.document);
  return results.violations;
}