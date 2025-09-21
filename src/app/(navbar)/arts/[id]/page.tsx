"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { key } from "@/components/constants/key";

export default function ArtDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [articles, setArticles] = useState<any[]>([]);
  const [article, setArticle] = useState<any | null>(null);

  useEffect(() => {
    async function fetchArts() {
      try {
        const res = await fetch(
          `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${key}`
        );
        const data = await res.json();
        setArticles(data.results || []);
        setArticle(data.results?.[parseInt(id as string)] || null);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    }
    if (id) fetchArts();
  }, [id]);

  if (!article) {
    return <p className="text-center text-gray-400 mt-10">Loading...</p>;
  }

  const currentIndex = parseInt(id as string);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < articles.length - 1;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 mt-15">
      <button
        onClick={() => router.push("/arts")}
        className="mb-6 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
      >
        ←
      </button>



      <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
      <p className="text-gray-500 mb-2">{article.byline}</p>
      <p className="text-sm text-gray-400 mb-6">
        Published: {new Date(article.published_date).toLocaleString()}
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">{article.abstract}</p>
      <div className="flex justify-between max-md:flex-col ">

        <div className="space-y-2 text-sm text-gray-600">
          <p><span className="font-semibold">Section:</span> {article.section}</p>
          {article.subsection && (
            <p><span className="font-semibold">Subsection:</span> {article.subsection}</p>
          )}
          <p><span className="font-semibold">Item Type:</span> {article.item_type}</p>
          <p><span className="font-semibold">Material:</span> {article.material_type_facet}</p>
          {article.kicker && (
            <p><span className="font-semibold">Kicker:</span> {article.kicker}</p>
          )}
          <p><span className="font-semibold">Updated:</span> {new Date(article.updated_date).toLocaleString()}</p>
          <p><span className="font-semibold">Created:</span> {new Date(article.created_date).toLocaleString()}</p>
          <div className="mt-6">
            {article.des_facet?.length > 0 && (
              <p><span className="font-semibold">Tags:</span> {article.des_facet.join(", ")}</p>
            )}
            {article.org_facet?.length > 0 && (
              <p><span className="font-semibold">Organizations:</span> {article.org_facet.join(", ")}</p>
            )}
            {article.per_facet?.length > 0 && (
              <p><span className="font-semibold">People:</span> {article.per_facet.join(", ")}</p>
            )}
            {article.geo_facet?.length > 0 && (
              <p><span className="font-semibold">Locations:</span> {article.geo_facet.join(", ")}</p>
            )}
          </div>
        </div>
        <div>
          {article.multimedia?.[0]?.url && (
            <img
              src={article.multimedia[0].url}
              alt={article.title}
              className="w-full h-80 object-contain rounded-md mb-6 mt-3 max-md:object-cover py-3 my-3"
            />
          )}
        </div>
      </div>



      {/* Multimedia Gallery */}
      {/* {article.multimedia?.length > 1 && (
        <div className="grid grid-cols-2 gap-4 mt-6">
          {article.multimedia.slice(1).map((media: any, i: number) => (
            <div key={i}>
              <img
                src={media.url}
                alt={media.caption}
                className="w-full h-40 object-cover rounded-md"
              />
              <p className="text-xs text-gray-500 mt-1">{media.caption}</p>
            </div>
          ))}
        </div>
      )} */}

      {article.url && (
        <a
          href={article.url}
          target="_blank"
          className="inline-block mt-8 px-4 py-2 border bg-black/20 rounded-md hover:bg-black/30"
        >
          Read Full Article →
        </a>
      )}

      <div className="flex justify-between mt-10">
        {hasPrev ? (
          <button
            onClick={() => router.push(`/arts/${currentIndex - 1}`)}
            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            ← Previous
          </button>
        ) : <div />}

        {hasNext && (
          <button
            onClick={() => router.push(`/arts/${currentIndex + 1}`)}
            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Next →
          </button>
        )}
      </div>
    </div>
  );
}
