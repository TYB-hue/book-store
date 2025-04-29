'use client';
// import { FaBookOpen, FaStar, FaRegStar, FaQuoteLeft } from 'react-icons/fa';
// import Navbar from '@/components/navbar';
// import Footer from '@/components/footer';

// Mock data - in a real app you'd fetch this from an API or database
const bookData = {
    1: {
      id: 1,
      title: "The Midnight Library",
      author: "Matt Haig",
      price: 24.99,
      cover: "https://m.media-amazon.com/images/I/81h2gWPTYJL._AC_UF1000,1000_QL80_.jpg",
      rating: 4.5,
      category: "Contemporary Fiction",
      description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices... Would you have done anything different, if you had the chance to undo your regrets?",
      releaseDate: "August 13, 2020",
      publisher: "Canongate Books",
      pages: 304,
      language: "English",
      isbn: "978-1786892737",
      aboutAuthor: "Matt Haig is an English author and journalist. He has written both fiction and non-fiction books for children and adults, often in the speculative fiction genre. His works include How to Stop Time, The Humans, and Reasons to Stay Alive.",
      reviews: [
        {
          id: 1,
          author: "Sarah Johnson",
          rating: 5,
          date: "January 15, 2021",
          text: "This book changed my perspective on life. The concept is brilliant and the execution is flawless. I couldn't put it down!"
        },
        {
          id: 2,
          author: "Michael Chen",
          rating: 4,
          date: "March 2, 2021",
          text: "A thought-provoking read that makes you question your life choices. The ending was a bit predictable but overall a great book."
        }
      ]
    },
    4: {
      id: 4,
      title: "Disney Villains: Deluxe Collector's Edition",
      author: "Glenn Dakin",
      price: 29.99,
      cover: "https://prodimage.images-bn.com/pimages/9780316586887_p0_v2_s192x300.jpg",
      rating: 4.7,
      category: "Art & Photography",
      description: "Delve into the wicked world of Disney's most infamous villains with this deluxe collector's edition. Featuring stunning artwork, behind-the-scenes sketches, and fascinating insights into the creation of these iconic characters from Snow White's Evil Queen to Frozen's Hans.",
      releaseDate: "October 6, 2020",
      publisher: "Disney Editions",
      pages: 160,
      language: "English",
      isbn: "978-1368052595",
      aboutAuthor: "Glenn Dakin is a British writer and cartoonist known for his work in comics and animation. He has written numerous books about animation and popular culture, including several official Disney publications.",
      reviews: [
        {
          id: 1,
          author: "Emma Rodriguez",
          rating: 5,
          date: "November 20, 2020",
          text: "Absolutely stunning collection! The artwork is breathtaking and the insights into the villains' creation are fascinating. A must-have for any Disney fan."
        },
        {
          id: 2,
          author: "David Kim",
          rating: 4,
          date: "December 5, 2020",
          text: "Beautiful book with high-quality prints. I wish it had included even more villains, but what's here is excellent."
        }
      ]
    },
    5: {
      id: 5,
      title: "Where the Crawdads Sing",
      author: "Delia Owens",
      price: 22.50,
      cover: "https://m.media-amazon.com/images/I/81O1oy0y9eL._AC_UF1000,1000_QL80_.jpg",
      rating: 4.8,
      category: "Literary Fiction",
      description: "For years, rumors of the 'Marsh Girl' have haunted Barkley Cove, a quiet town on the North Carolina coast. So in late 1969, when handsome Chase Andrews is found dead, the locals immediately suspect Kya Clark, the so-called Marsh Girl. But Kya is not what they say. Sensitive and intelligent, she has survived for years alone in the marsh that she calls home, finding friends in the gulls and lessons in the sand.",
      releaseDate: "August 14, 2018",
      publisher: "G.P. Putnam's Sons",
      pages: 384,
      language: "English",
      isbn: "978-0735219090",
      aboutAuthor: "Delia Owens is the co-author of three internationally bestselling nonfiction books about her life as a wildlife scientist in Africa. She has won the John Burroughs Award for Nature Writing and has been published in Nature, The African Journal of Ecology, and International Wildlife. Where the Crawdads Sing is her first novel.",
      reviews: [
        {
          id: 1,
          author: "Jennifer Lee",
          rating: 5,
          date: "September 10, 2018",
          text: "One of the most beautiful books I've ever read. The descriptions of nature are poetic, and Kya's story will stay with me forever."
        },
        {
          id: 2,
          author: "Robert Taylor",
          rating: 5,
          date: "October 22, 2018",
          text: "A masterpiece of storytelling. The perfect blend of mystery, coming-of-age, and nature writing. Couldn't recommend it more."
        },
        {
          id: 3,
          author: "Amanda Smith",
          rating: 4,
          date: "January 5, 2019",
          text: "Beautifully written but the ending felt a bit rushed. Still, one of the best books I read last year."
        }
      ]
    },
    6: {
      id: 6,
      title: "The Girl on the Train",
      author: "Paula Hawkins",
      price: 18.95,
      cover: "https://m.media-amazon.com/images/I/81-Q2OAVeXL._SL1500_.jpg",
      rating: 4.1,
      category: "Psychological Thriller",
      description: "Rachel takes the same commuter train every morning. Every day she rattles down the track, flashes past a stretch of cozy suburban homes, and stops at the signal that allows her to daily watch the same couple breakfasting on their deck. She's even started to feel like she knows them. 'Jess and Jason,' she calls them. Their life—as she sees it—is perfect. Not unlike the life she recently lost. And then she sees something shocking. It's only a minute until the train moves on, but it's enough. Now everything's changed.",
      releaseDate: "January 13, 2015",
      publisher: "Riverhead Books",
      pages: 336,
      language: "English",
      isbn: "978-1594633669",
      aboutAuthor: "Paula Hawkins worked as a journalist for fifteen years before turning to fiction. Born and brought up in Zimbabwe, Paula moved to London in 1989 and has lived there ever since. The Girl on the Train is her first thriller.",
      reviews: [
        {
          id: 1,
          author: "Lisa Wong",
          rating: 5,
          date: "February 2, 2015",
          text: "Absolutely gripping from start to finish. One of those books you stay up all night reading because you can't put it down."
        },
        {
          id: 2,
          author: "Thomas Brown",
          rating: 4,
          date: "March 15, 2015",
          text: "Great suspense novel with an unreliable narrator that keeps you guessing. The movie adaptation didn't do it justice."
        },
        {
          id: 3,
          author: "Nancy Wilson",
          rating: 3,
          date: "April 10, 2015",
          text: "Good page-turner but some plot points strained credibility. Still worth reading for the suspense."
        }
      ]
    },
    7: {
      id: 7,
      title: "Maybe You Should Talk to Someone",
      author: "Lori Gottlieb",
      price: 17.99,
      cover: "https://m.media-amazon.com/images/I/71r0hQEoWIL._SL1500_.jpg",
      rating: 4.7,
      category: "Psychology & Self-Help",
      description: "One day, Lori Gottlieb is a therapist who helps patients in her Los Angeles practice. The next, a crisis causes her world to come crashing down. Enter Wendell, the quirky but seasoned therapist in whose office she suddenly lands. With startling wisdom and humor, Gottlieb invites us into her world as both clinician and patient, examining the truths and fictions we tell ourselves and others.",
      releaseDate: "April 2, 2019",
      publisher: "Houghton Mifflin Harcourt",
      pages: 432,
      language: "English",
      isbn: "978-1328662057",
      aboutAuthor: "Lori Gottlieb is a psychotherapist and New York Times bestselling author. She writes The Atlantic's weekly 'Dear Therapist' advice column and contributes regularly to The New York Times and many other publications. Her TED Talk was one of the most watched of 2019.",
      reviews: [
        {
          id: 1,
          author: "Daniel Carter",
          rating: 5,
          date: "May 12, 2019",
          text: "This book is life-changing. Part memoir, part case studies, it's funny, moving, and profoundly insightful about the human condition."
        },
        {
          id: 2,
          author: "Sophia Martinez",
          rating: 5,
          date: "June 3, 2019",
          text: "As a therapist myself, I can say this is one of the most authentic portrayals of therapy I've ever read. Also incredibly helpful for anyone considering therapy."
        },
        {
          id: 3,
          author: "Kevin Johnson",
          rating: 4,
          date: "July 20, 2019",
          text: "Made me laugh, made me cry, made me think deeply about my own life. Only reason not 5 stars is I wanted even more patient stories!"
        }
      ]
    },
    8: {
      id: 8,
      title: "Goodnight Goodnight Construction Site",
      author: "Sherri Duskey Rinker",
      price: 12.99,
      cover: "https://m.media-amazon.com/images/I/913nY-+HJIL._SL1500_.jpg",
      rating: 4.9,
      category: "Children's Picture Books",
      description: "As the sun sets behind the big construction site, all the hardworking trucks get ready to say goodnight. One by one, Crane Truck, Cement Mixer, Dump Truck, Bulldozer, and Excavator finish their work and lie down to rest—so they'll be ready for another day of rough and tough construction play!",
      releaseDate: "February 15, 2011",
      publisher: "Chronicle Books",
      pages: 32,
      language: "English",
      isbn: "978-0811877824",
      aboutAuthor: "Sherri Duskey Rinker is the author of #1 New York Times bestsellers Goodnight, Goodnight, Construction Site and Steam Train, Dream Train. Before becoming a children's book author, she was an advertising creative director. She lives in the Chicago area with her photographer husband, two sons, and a recalcitrant terrier.",
      reviews: [
        {
          id: 1,
          author: "MomOfTwo",
          rating: 5,
          date: "March 10, 2011",
          text: "My construction-obsessed toddler asks for this every night. The rhymes are perfect and the illustrations are beautiful. We've probably read it 300 times!"
        },
        {
          id: 2,
          author: "PreschoolTeacher",
          rating: 5,
          date: "April 5, 2011",
          text: "This is the perfect bedtime story. Calming, rhythmic, and engaging. The kids in my class love acting out the trucks going to sleep."
        },
        {
          id: 3,
          author: "BookLover",
          rating: 5,
          date: "May 22, 2011",
          text: "Even after reading this hundreds of times, I still enjoy it. The artwork is stunning and the story is so sweet. A modern classic."
        }
      ]
    },
    2: {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      price: 19.99,
      cover: "https://m.media-amazon.com/images/I/51B7kuFwQFL._SY425_.jpg",
      rating: 4.7,
      category: "Self-Help",
      description: "No matter your goals, Atomic Habits offers a proven framework for improving—every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
      releaseDate: "October 16, 2018",
      publisher: "Avery",
      pages: 320,
      language: "English",
      isbn: "978-0735211292",
      aboutAuthor: "James Clear is a writer and speaker focused on habits, decision making, and continuous improvement. His work has appeared in the New York Times, Time, and Entrepreneur, and on CBS This Morning. He shares self-improvement tips at JamesClear.com.",
      reviews: [
        {
          id: 1,
          author: "Mark Thompson",
          rating: 5,
          date: "November 5, 2018",
          text: "This book completely changed how I approach habit formation. The 1% better every day concept is life-changing."
        },
        {
          id: 2,
          author: "Sarah Williams",
          rating: 4,
          date: "December 12, 2018",
          text: "Practical, actionable advice. Some concepts were familiar but the presentation and organization made it worth reading."
        }
      ]
    },
    3: {
      id: 3,
      title: "The Very Hungry Caterpillar",
      author: "Eric Carle",
      price: 15.99,
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgVFRWRNkArJ1PqQiqPcYMekcSmHBxZabU0Q&s",
      rating: 4.8,
      category: "Children's Picture Books",
      description: "One sunny Sunday, the caterpillar was hatched out of a tiny egg. He was very hungry. On Monday, he ate through one apple; on Tuesday, he ate through three plums—and still he was hungry. Strikingly bold, colorful pictures and a simple text in large, clear type tell the story of a hungry little caterpillar's progress through an amazing variety and quantity of foods.",
      releaseDate: "June 3, 1969",
      publisher: "World Publishing Company",
      pages: 22,
      language: "English",
      isbn: "978-0399208539",
      aboutAuthor: "Eric Carle (1929-2021) was acclaimed and beloved as the creator of brilliantly illustrated and innovatively designed picture books for very young children. His best-known work, The Very Hungry Caterpillar, has been translated into 70 languages and sold over 55 million copies.",
      reviews: [
        {
          id: 1,
          author: "Lisa Chen",
          rating: 5,
          date: "March 15, 2010",
          text: "A timeless classic! My kids loved it when they were little, and now my grandchildren enjoy it just as much."
        },
        {
          id: 2,
          author: "David Miller",
          rating: 5,
          date: "April 2, 2015",
          text: "Perfect first book for toddlers. Teaches counting, days of the week, and the life cycle of a butterfly in a fun way."
        }
      ]
    }
  };

import { FaBookOpen, FaStar, FaRegStar, FaQuoteLeft } from 'react-icons/fa';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { use } from 'react'; // Import the use hook

// ... (your existing bookData object remains exactly the same)

export default function BookPage({ params }) {
  // Unwrap the params promise first
  const unwrappedParams = use(params);
  // Then access the id property
  const book = bookData[unwrappedParams.id];
  
  if (!book) {
    return <div className="bg-black text-white min-h-screen">Book not found</div>;
  }

  // The rest of your component remains exactly the same
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header Component */}
      <Navbar />

      {/* Book Main Section */}
      <main className="container mx-auto py-12 px-6">
        <div className="flex flex-col lg:flex-row gap-12">
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
            {/* You would map through related books here */}
            <div className="bg-zinc-900 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-purple-900/30 transition-all duration-300">
              <div className="h-64 bg-zinc-800 flex items-center justify-center p-4">
                <img 
                  src="https://m.media-amazon.com/images/I/51B7kuFwQFL._SY425_.jpg" 
                  alt="Atomic Habits" 
                  className="h-full w-auto object-contain shadow-lg rounded-sm"
                  style={{
                    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                    transform: 'perspective(1000px) rotateY(-10deg)',
                    borderLeft: '4px solid #6b46c1',
                    borderRight: '4px solid #6b46c1'
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Atomic Habits</h3>
                <p className="text-zinc-400 mb-2">James Clear</p>
                <div className="flex justify-between items-center">
                  <span className="text-purple-400 font-bold">$19.99</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span 
                        key={i} 
                        className={`text-sm ${i < 4 ? 'text-yellow-400' : 'text-zinc-600'}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}