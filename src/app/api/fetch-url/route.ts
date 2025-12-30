import { NextResponse } from "next/server";
import fetch from "node-fetch";

export async function POST(req: Request) {
  try {
    const { url } = await req.json();

    if (!url) return NextResponse.json({ error: "No URL provided" });

    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch URL: ${res.statusText}`);

    const html = await res.text();

    return NextResponse.json({ html });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Failed to fetch URL" });
  }
}
