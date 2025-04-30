import { bookData } from '@/data/books';

import { notFound } from 'next/navigation';
import BookDetailsClient from '../[id]/BookDetailsClient';

export function generateStaticParams() {
  return Object.keys(bookData).map((id) => ({
    id: id.toString(),
  }));
}

interface BookPageProps {
  params: { id: string };
}

export default function BookPage({ params }: BookPageProps) {
  const id = params.id;
  const book = bookData[parseInt(id)];

  if (!book) {
    notFound();
  }

  return (
    <div>
      <BookDetailsClient book={book} />
    </div>
  );
}
