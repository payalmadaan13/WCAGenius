import { JSDOM } from "jsdom";

export async function POST(req: Request) {
  const { html } = await req.json();

  if (!html || typeof html !== "string") {
    return Response.json({ error: "Invalid HTML input" }, { status: 400 });
  }

  // 1️⃣ Create DOM FIRST
  const dom = new JSDOM(html, {
    pretendToBeVisual: true,
    runScripts: "dangerously",
  });

  const { window } = dom;

  // 2️⃣ Attach globals BEFORE importing axe
  // @ts-ignore
  global.window = window;
  // @ts-ignore
  global.document = window.document;
  // @ts-ignore
  global.Node = window.Node;
  // @ts-ignore
  global.HTMLElement = window.HTMLElement;

  // 3️⃣ Stub canvas (axe requires this)
  window.HTMLCanvasElement.prototype.getContext = () => {
    return {
      fillRect() {},
      clearRect() {},
      getImageData() {
        return { data: [] };
      },
      putImageData() {},
      createImageData() {
        return [];
      },
      setTransform() {},
      drawImage() {},
      save() {},
      restore() {},
      beginPath() {},
      moveTo() {},
      lineTo() {},
      closePath() {},
      stroke() {},
      fillText() {},
      measureText() {
        return { width: 0 };
      },
      transform() {},
      rotate() {},
      translate() {},
      scale() {},
      arc() {},
      fill() {},
      strokeRect() {},
    } as any;
  };

  // 4️⃣ IMPORT axe-core ONLY AFTER globals exist
  const axe = (await import("axe-core")).default;

  // 5️⃣ Run scan
  const results = await axe.run(window.document);

  return Response.json({
    results: results.violations,
  });
}
