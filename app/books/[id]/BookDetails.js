'use client';
import { FaStar, FaRegStar, FaQuoteLeft } from 'react-icons/fa';

export default function BookDetails({ book }) {
  // Your existing JSX from <main> content
  return (
    <div className="flex flex-col lg:flex-row gap-12">
      {/* your current main component content */}

      <main className="container mx-auto py-12 px-6">
/                <div className="flex flex-col lg:flex-row gap-12">
                     {/* Book Cover */}
                 <div className="lg:w-1/3">
                       <div className="bg-zinc-900 rounded-lg p-6 flex justify-center">
                           <img 
                                src={book.cover} 
                                alt={book.title} 
                                className="h-96 w-auto object-contain shadow-lg rounded-sm"
                                style={{
                                    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                                    transform: 'perspective(1000px) rotateY(-10deg)',
                                    borderLeft: '4px solid #6b46c1',
                                    borderRight: '4px solid #6b46c1'
                                }}
                            />
                        </div>

                        {/* Purchase Box */}
                        <div className="bg-zinc-900 rounded-lg p-6 mt-6">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-2xl font-bold text-purple-400">${book.price}</span>
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        i < Math.floor(book.rating) ? 
                                        <FaStar key={i} className="text-yellow-400" /> : 
                                        <FaRegStar key={i} className="text-zinc-600" />
                                    ))}
                                    <span className="ml-2 text-zinc-400">({book.rating})</span>
                                </div>
                            </div>

                            <div className="mt-6 text-sm text-zinc-400">
                                <div className="flex justify-between py-2 border-b border-zinc-800">
                                    <span>Publisher</span>
                                    <span>{book.publisher}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-zinc-800">
                                    <span>Release Date</span>
                                    <span>{book.releaseDate}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-zinc-800">
                                    <span>Pages</span>
                                    <span>{book.pages}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-zinc-800">
                                    <span>Language</span>
                                    <span>{book.language}</span>
                                </div>
                                <div className="flex justify-between py-2">
                                    <span>ISBN</span>
                                    <span>{book.isbn}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Book Details */}
                    <div className="lg:w-2/3">
                        <h1 className="text-4xl font-bold mb-2">{book.title}</h1>
                        <p className="text-xl text-purple-400 mb-6">by {book.author}</p>

                        <div className="flex items-center mb-8">
                            <div className="flex items-center mr-4">
                                {[...Array(5)].map((_, i) => (
                                    i < Math.floor(book.rating) ? 
                                    <FaStar key={i} className="text-yellow-400" /> : 
                                    <FaRegStar key={i} className="text-zinc-600" />
                                ))}
                                <span className="ml-2 text-zinc-400">{book.rating} ({Math.floor(book.rating * 20)} reviews)</span>
                            </div>
                            <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">{book.category}</span>
                        </div>

                        {/* Book Description */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold mb-4 text-purple-400">About the Book</h2>
                            <p className="text-zinc-300 leading-relaxed">{book.description}</p>
                        </div>

                        {/* About the Author */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold mb-4 text-purple-400">About the Author</h2>
                            <p className="text-zinc-300 leading-relaxed">{book.aboutAuthor}</p>
                        </div>

                        {/* Reviews */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6 text-purple-400">Customer Reviews</h2>

                            {book.reviews.map(review => (
                                <div key={review.id} className="bg-zinc-900 rounded-lg p-6 mb-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="font-bold">{review.author}</h3>
                                        <div className="flex items-center">
                                            {[...Array(5)].map((_, i) => (
                                                i < review.rating ? 
                                                <FaStar key={i} className="text-yellow-400 text-sm" /> : 
                                                <FaRegStar key={i} className="text-zinc-600 text-sm" />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-zinc-400 text-sm mb-2">{review.date}</p>
                                    <div className="relative">
                                        <FaQuoteLeft className="absolute -left-2 -top-2 text-purple-900/50 text-2xl" />
                                        <p className="text-zinc-300 pl-6">{review.text}</p>
                                    </div>
                                </div>
                            ))}

                            {/* Add Review Button */}
                            <button className="mt-4 border border-purple-600 text-purple-400 hover:bg-purple-900/30 px-6 py-2 rounded-lg transition-colors duration-300">
                                Write a Review
                            </button>
                        </div>
                    </div>
                </div>

                {/* Related Books Section */}
                <section className="mt-16">
                    <h2 className="text-3xl font-bold mb-8 text-purple-400">You May Also Like</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Add Related Books here */}
                    </div>
                </section>
            </main>
    </div>
  );
}
