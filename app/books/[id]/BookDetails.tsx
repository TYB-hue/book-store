'use client';
import { Book } from '@/types/book';

// interface Review {
//   user: string;
//   comment: string;
//   rating: number;
// }

// interface Book {
//   id: number;
//   title: string;
//   author: string;
//   price: number;
//   cover: string;
//   rating: number;
//   category: string;
//   description: string;
//   releaseDate: string;
//   publisher: string;
//   pages: number;
//   language: string;
//   isbn: string;
//   aboutAuthor: string;
//   reviews: Review[];
// }

export default function BookDetails({ book }: { book: Book }) {
  return (
    <div className="book-details">
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Price: ${book.price}</p>
      <img src={book.cover} alt={book.title} />
      <p>Description: {book.description}</p>
      {/* Add more fields as needed */}
    </div>
  );
}
