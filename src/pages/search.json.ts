import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async () => {
  const entries = await getCollection("pages");

  const items = entries.map((entry) => {
    const slug =
      entry.id === "index"
        ? ""
        : entry.id.replace(/\/index$/, "");

    return {
      title: entry.data.title ?? entry.id,
      url: slug ? `/${slug}/` : "/",
      text: entry.body ?? "",
    };
  });

  return new Response(JSON.stringify(items), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
};