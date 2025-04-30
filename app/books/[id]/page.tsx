'use client';

import { bookData } from '@/data/books';

import { useParams } from 'next/navigation';
import BookDetails from './BookDetails';

// 🚀 THIS is the new function you must add
export function generateStaticParams() {
  return Object.keys(bookData).map((id) => ({
    id: id.toString(),
  }));
}

export default function BookPage() {
  const params = useParams();
  const id = params?.id as string;

  if (!id || !bookData[parseInt(id)]) {
    return <div>Book not found</div>;
  }

  const book = bookData[parseInt(id)];

  return (
    <div>
      <BookDetails book={book} />
    </div>
  );
}
