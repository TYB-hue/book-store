'use client';

import { Book } from '@/types/book';
import BookDetails from './BookDetails';

interface BookDetailsClientProps {
  book: Book;
}

export default function BookDetailsClient({ book }: BookDetailsClientProps) {
  return (
    <div>
      <BookDetails book={book} />
    </div>
  );
}
