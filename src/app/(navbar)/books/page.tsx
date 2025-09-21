"use client";
import { key } from '@/components/constants/key'
import { useEffect, useState } from "react";

export default function BooksPage() {
  const [lists, setLists] = useState<any[]>([]);
  const [date, setDate] = useState("current");
  const [selectedBook, setSelectedBook] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [timeoutReached, setTimeoutReached] = useState(false);

  async function fetchBooks(selectedDate: string) {
    try {
      setLoading(true);
      setTimeoutReached(false);

      const res = await fetch(
        `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${key}&published_date=${selectedDate}`
      );
      const data = await res.json();
      setLists(data.results?.lists || []);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBooks("current");

    const timer = setTimeout(() => {
      if (loading) {
        setTimeoutReached(true);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-[60vh] px-6 py-10 mt-15">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6 max-md:flex-col">
          <h1 className="text-3xl font-bold px-3 max-md:mb-5">
            New York Times Books ({date})
          </h1>
          <span className="flex-row">
            Search by Date{" "}
            <input
              type="date"
              onChange={(e) => {
                const selected = e.target.value || "current";
                setDate(selected);
                fetchBooks(selected);
              }}
              className="px-3 py-2 rounded-md bg-black/15 border border-black/20"
            />
          </span>
        </div>

        {loading && !timeoutReached && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-black/10 p-4 backdrop-blur-md animate-pulse"
              >
                <div className="h-40 w-full bg-gray-400 rounded-md mb-4" />
                <div className="h-4 w-3/4 bg-gray-400 rounded mb-2" />
                <div className="h-3 w-1/2 bg-gray-400 rounded" />
              </div>
            ))}
          </div>
        )}

        {!loading && lists.length > 0 && (
          lists.map((list) => (
            <div key={list.list_id} className="mb-12">
              <h2 className="text-2xl font-semibold text-black-400 mb-4 px-3">
                Category: {list.list_name}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-md:p-1">
                {list.books.map((book: any) => (
                  <div
                    key={book.primary_isbn13}
                    onClick={() => setSelectedBook(book)} 
                    className="cursor-pointer rounded-xl border border-white/10 bg-black/15 p-4 backdrop-blur-md hover:scale-[1.02] transition"
                  >
                    <img
                      src={book.book_image}
                      alt={book.title}
                      className="h-50 w-full object-cove rounded-md mb-4 object-contain bg-white"
                    />
                    <h3 className="text-lg font-semibold">{book.title}</h3>
                    <p className="text-sm text-gray-400">{book.author}</p>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}

        {timeoutReached && lists.length === 0 && (
          <p className="text-gray-400 text-center mt-10 max-h-screen">
            No books found for {date}.
          </p>
        )}
      </div>

      {selectedBook && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 max-md:px-2">
          <div className="bg-white rounded-xl p-6 max-w-lg w-full relative shadow-xl  overflow-y-auto">
            <button
              onClick={() => setSelectedBook(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <img
              src={selectedBook.book_image}
              alt={selectedBook.title}
              className="w-20 mx-auto mb-6 rounded-md"
            />
            <h2 className="text-2xl font-bold mb-2">{selectedBook.title}</h2>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Author:</span> {selectedBook.author}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Publisher:</span> {selectedBook.publisher}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Rank:</span> {selectedBook.rank}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Weeks on List:</span> {selectedBook.weeks_on_list}
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              {selectedBook.description || "No description available."}
            </p>

            {selectedBook.amazon_product_url && (
              <a
                href={selectedBook.amazon_product_url}
                target="_blank"
                className="inline-block mt-6 px-4 py-2 bg-green-100 rounded-md hover:bg-black/20"
              >
                Buy on Amazon
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
