'use client';


import { useParams } from 'next/navigation';
import { bookData } from '@/data/books';
import BookDetails from '../[id]/BookDetails';


export default function BookPage() {
  const params = useParams();
  const id = params?.id as string;

  if (!id || !bookData[parseInt(id)]) {
    return <div>Book not found</div>;
  }

  const book = bookData[parseInt(id)];

  return (
    <div>
      <BookDetails book ={book} />
    </div>
  );
}
