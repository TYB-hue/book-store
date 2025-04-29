// app/books/[id]/page.js
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

// Your book data (could also be fetched from an API or database)
const books = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 24.99,
    cover: "https://m.media-amazon.com/images/I/81h2gWPTYJL._AC_UF1000,1000_QL80_.jpg",
    rating: 4.5,
    category: "Contemporary Fiction",
    description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. Nora Seed finds herself faced with this decision. A dazzling novel about all the choices that go into a life well lived.",
    content: "The Midnight Library explores themes of regret, depression, and the search for meaning. Nora Seed, unhappy with her life, finds herself in a library between life and death where each book represents a different version of her life had she made different choices. As she explores these alternate realities, she learns valuable lessons about what truly makes life worth living.",
    importance: "This book is important because it tackles mental health issues with sensitivity while offering hope. It encourages readers to reflect on their own lives and the choices they've made, showing that even small decisions can lead to significant changes. The novel has resonated with readers worldwide for its profound yet accessible exploration of existential questions."
  },
  // Add all your other books here
  // ...
];

export async function generateStaticParams() {
  return books.map((book) => ({
    id: book.id.toString(),
  }));
}

export default function BookPage({ params }) {
  const { id } = params;
  const book = books.find(book => book.id === Number(id));

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <main className="container mx-auto py-12 px-6 max-w-6xl">
        {/* Book Details Section */}
        <section className="flex flex-col md:flex-row gap-10 mb-16">
          {/* Book Cover */}
          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-full max-w-xs h-auto">
              <img 
                src={book.cover} 
                alt={book.title} 
                className="w-full h-auto rounded-lg shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300"
              />
              <div className="absolute inset-0 border-4 border-purple-600 rounded-lg opacity-20 hover:opacity-40 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>

          {/* Book Info */}
          <div className="md:w-2/3">
            <div className="mb-6">
              <span className="text-purple-400 font-medium">{book.category}</span>
              <h1 className="text-4xl font-bold mt-2 mb-3">{book.title}</h1>
              <h2 className="text-2xl text-gray-300 mb-4">by {book.author}</h2>
              
              <div className="flex items-center mb-4">
                <div className="flex mr-4">
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i} 
                      className={`text-lg ${i < Math.floor(book.rating) ? 'text-yellow-400' : 'text-gray-600'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-gray-400">{book.rating}/5.0</span>
              </div>

              <p className="text-2xl font-bold text-purple-400 mb-6">${book.price}</p>

              <div className="flex gap-4 mb-8">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                  Add to Cart
                </button>
                <button className="border border-purple-600 text-purple-400 hover:bg-purple-900/30 px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                  Wishlist
                </button>
              </div>
            </div>

            {/* Book Description */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3 text-purple-300">Description</h3>
              <p className="text-gray-300 leading-relaxed">{book.description}</p>
            </div>
          </div>
        </section>

        {/* Additional Book Information */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div>
            <h3 className="text-xl font-bold mb-3 text-purple-300">About the Content</h3>
            <p className="text-gray-300 leading-relaxed">{book.content}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 text-purple-300">Why This Book Matters</h3>
            <p className="text-gray-300 leading-relaxed">{book.importance}</p>
          </div>
        </section>

        {/* Author Section */}
        <section className="mb-16 bg-zinc-900 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-purple-300">About the Author</h3>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-32 h-32 rounded-full bg-zinc-800 overflow-hidden flex-shrink-0">
              {/* Placeholder for author image */}
              <div className="w-full h-full bg-purple-900/50 flex items-center justify-center text-4xl">
                {book.author.split(' ').map(name => name[0]).join('')}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">{book.author}</h4>
              <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section>
          <h3 className="text-2xl font-bold mb-6 text-purple-300">Customer Reviews</h3>
          <div className="space-y-6">
            {/* Sample Review */}
            <div className="bg-zinc-900 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-bold">John D.</h4>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">★</span>
                    ))}
                  </div>
                </div>
                <span className="text-gray-400 text-sm">2 weeks ago</span>
              </div>
              <p className="text-gray-300">&quot;This book completely changed my perspective on life. The way it explores alternate realities while maintaining a deeply personal narrative is masterful. Highly recommend to anyone feeling stuck in their life."</p>
            </div>

            {/* Another Sample Review */}
            <div className="bg-zinc-900 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-bold">Sarah M.</h4>
                  <div className="flex mt-1">
                    {[...Array(4)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">★</span>
                    ))}
                    <span className="text-gray-600 text-sm">★</span>
                  </div>
                </div>
                <span className="text-gray-400 text-sm">1 month ago</span>
              </div>
              <p className="text-gray-300">&quot;While I enjoyed the concept, I found some parts a bit slow. That said, the ending was profoundly moving and made the journey worthwhile. Matt Haig has a unique way of blending philosophy with storytelling."</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}