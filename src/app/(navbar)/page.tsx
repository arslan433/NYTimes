"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { key } from "@/components/constants/key";

export default function HomePage() {
  const [books, setBooks] = useState<any[]>([]);
  const [arts, setArts] = useState<any[]>([]);
  const [home, setHome] = useState<any[]>([]);
  const [science, setScience] = useState<any[]>([]);
  const [us, setUs] = useState<any[]>([]);
  const [world, setWorld] = useState<any[]>([]);

  useEffect(() => {
    async function fetchTopStories(section: string, setter: any) {
      try {
        const res = await fetch(
          `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${key}`
        );
        const data = await res.json();
        setter(data.results?.slice(0, 8) || []);
      } catch (error) {
        console.error(`Error fetching ${section}:`, error);
      }
    }

    fetchTopStories("arts", setArts);
    fetchTopStories("home", setHome);
    fetchTopStories("us", setUs);
    fetchTopStories("world", setWorld);
  }, []);

  const Section = ({ title, items, link, renderItem }: any) => (
    <section className="mb-16">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Link href={link} className="text-blue-500 hover:underline">
          More →
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item: any, i: number) => renderItem(item, i))}
      </div>
    </section>
  );

  return (
    <div className="px-6 py-10 space-y-16 max-w-6xl mx-auto">

      {/* Arts Section */}
      <Section
        title="Arts"
        items={arts}
        link="/arts"
        renderItem={(article: any, i: number) => (
          <div key={i} className="rounded-xl border bg-black/10 p-4">
            <Link
              key={i}
              href={`/arts/${(i)}`}
            >

              {article.multimedia?.[0]?.url && (
                <img
                  src={article.multimedia[0].url}
                  alt={article.title}
                  className="h-40 w-full object-cover rounded-md mb-4"
                />
              )}
              <h3 className="font-semibold mb-2">{article.title}</h3>
              <p className="text-sm text-gray-500">{article.byline}</p>
            </Link>
          </div>
        )}
      />

      {/* Top Section */}
      <Section
        title="Top Stories"
        items={home}
        link="/topstories"
        renderItem={(article: any, i: number) => (
          <Link
            key={i}
            href={`/topstories/${(i)}`}
          >
            <div key={i} className="rounded-xl border bg-black/10 p-4">
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
        )}
      />


      {/* US Section */}
      {/* <Section
        title="US"
        items={us}
        link="/us"
        renderItem={(article: any, i: number) => (
          <div key={i} className="rounded-xl border bg-black/10 p-4">
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
        )}
      /> */}

      {/* World Section */}
      {/* <Section
        title="World"
        items={world}
        link="/world"
        renderItem={(article: any, i: number) => (
          <div key={i} className="rounded-xl border bg-black/10 p-4">
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
        )}
      /> */}
    </div>
  );
}
