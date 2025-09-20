"use client";
import { key } from '@/components/constants/key'
import { useEffect, useState } from "react";

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [date, setDate] = useState("current"); // ✅ default "current"

  // ✅ Fetch books by date or "current"
  async function fetchBooks(selectedDate) {
    try {
      const res = await fetch(
        `https://api.nytimes.com/svc/books/v3/lists/${selectedDate}/hardcover-fiction.json?api-key=${key}`
      );
      const data = await res.json();
      setBooks(data.results?.books || []);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  }

  useEffect(() => {
    fetchBooks("current");
  }, []);

  return (
    <div className="min-h-[60vh] px-6 py-10 mt-15">
      <div className="max-w-6xl mx-auto">
        {/* Header with Date Picker */}
        <div className="flex justify-between items-center mb-6 max-md:flex-col">
          <h1 className="text-3xl font-bold px-3 max-md:mb-5">
            New York Times Best Sellers ({date})
          </h1>
          <input
            type="date"
            onChange={(e) => {
              const selected = e.target.value || "current";
              setDate(selected);
              fetchBooks(selected);
            }}
            className="px-3 py-2 rounded-md bg-black/60 text-white border border-white/20"
          />
        </div>

        {/* Books Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-md:p-1">
          {books.map((book) => (
            <div
              key={book.primary_isbn13}
              className="rounded-xl border border-white/10 bg-black/15 p-4 backdrop-blur-md"
            >
              <img
                src={book.book_image}
                alt={book.title}
                className="h-40 w-full object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold">{book.title}</h2>
              <p className="text-sm text-gray-400">{book.author}</p>
            </div>
          ))}
        </div>

        {books.length === 0 && (
          <p className="text-gray-400 text-center mt-10 max-h-screen">
            No books found for {date}.
          </p>
        )}
      </div>
    </div>
  );
}
