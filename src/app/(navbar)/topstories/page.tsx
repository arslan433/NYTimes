"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { key } from "@/components/constants/key";

export default function TopStoriesPage() {
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    async function fetchTopStories() {
      try {
        const res = await fetch(
          `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${key}`
        );
        const data = await res.json();
        setArticles(data.results || []);
      } catch (error) {
        console.error("Error fetching top stories:", error);
      }
    }
    fetchTopStories();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">Top Stories</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, i) => (
          <Link
            key={i}
            href={`/topstories/${(i)}`}
          >
            <div className="cursor-pointer rounded-xl border bg-black/10 p-4 hover:scale-[1.02] transition">
            {article.multimedia?.[0]?.url && (
              <img
                src={article.multimedia[0].url}
                alt={article.title}
                className="h-40 w-full object-cover rounded-md mb-4"
              />
            )}
              <h3 className="font-semibold mb-2">{article.title}</h3>
              <p className="text-sm text-gray-500">{article.byline}</p>
              <p className="text-xs text-gray-400 mt-2 line-clamp-3">
                {article.abstract}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
