"use client";
import { key } from '@/components/constants/key'
import { useEffect, useState } from "react";

export default function BooksPage() {
  const [books, setBooks] = useState<any[]>([]);

 useEffect(() => {
       async function fetchBooks() {
         try {
           const res = await fetch(
             `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${key}`
           );
           const data = await res.json();
           setBooks(data.results.books);
         } catch (error) {
           console.error("Error fetching books:", error);
         } 
       }
       fetchBooks();
     });
 

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-15 min-h-screen">
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
  );
}
