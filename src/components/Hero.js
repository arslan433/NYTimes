"use client";

import { useEffect, useState } from "react";
import {key} from './constants/key'
export default function Hero() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      const res = await fetch(
        `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${key}`
      );
      const data = await res.json();
      setBooks(data.results.books);
    }
    fetchBooks();
  }, []);

  return (
    <div className="p-6 mt-13">
      <h1 className="text-2xl font-bold mb-4">NYT Best Sellers</h1>
      <ul className="space-y-3">
        {books.map((book) => (
          <li key={book.primary_isbn13} className="p-3 bg-gray-100 rounded">
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}
