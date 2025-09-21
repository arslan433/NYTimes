"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { key } from "@/components/constants/key";

export default function ArtsPage() {
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    async function fetchArts() {
      try {
        const res = await fetch(
          `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${key}`
        );
        const data = await res.json();
        setArticles(data.results || []);
      } catch (error) {
        console.error("Error fetching arts:", error);
      }
    }
    fetchArts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 mt-15">
      <h1 className="text-3xl font-bold mb-8"> Articles</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, i) => (
          <Link
            key={i}
            href={`/arts/${(i)}`}
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
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
