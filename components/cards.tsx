import { BookOpen, Atom, Landmark, Heart } from "lucide-react";
import Link from "next/link";

export default function Cards() {
  return (
    <section className="bg-zinc-950 text-white py-20 px-6 md:px-12 relative overflow-hidden">
      {/* Cute background illustrations */}
      <div className="absolute inset-0 opacity-[4%] pointer-events-none">
        {/* Happy stack of books */}
        <svg
          className="absolute top-20 left-10 w-28 h-28"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15 30V80H25V30H15Z" fill="currentColor" />
          <path d="M25 35V75H45V35H25Z" fill="currentColor" />
          <path d="M45 40V70H65V40H45Z" fill="currentColor" />
          <circle cx="20" cy="25" r="2" fill="currentColor" />
          <circle cx="35" cy="30" r="2" fill="currentColor" />
          <circle cx="55" cy="35" r="2" fill="currentColor" />
        </svg>

        {/* Smiling open book */}
        <svg
          className="absolute bottom-20 right-16 w-32 h-32"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 20L60 30V70L20 80V20Z" fill="currentColor" />
          <path d="M80 20L40 30V70L80 80V20Z" fill="currentColor" />
          <circle cx="45" cy="50" r="3" fill="white" />
          <circle cx="55" cy="50" r="3" fill="white" />
          <path d="M45 60Q50 65 55 60" stroke="white" strokeWidth="2" fill="none" />
        </svg>

        {/* Cute reading glasses */}
        <svg
          className="absolute top-1/4 right-1/3 w-20 h-20"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="30" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="70" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M45 50H55" stroke="currentColor" strokeWidth="2" />
          <path d="M15 50H25M75 50H85" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>

        {/* Little bookmark with heart */}
        <svg
          className="absolute bottom-1/3 left-1/4 w-16 h-16"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M50 15V85L35 70H15V30H35L50 15Z" fill="currentColor" />
          <path d="M50 35Q55 30 60 35Q55 45 50 50Q45 45 40 35Q45 30 50 35Z" fill="white" />
        </svg>

        {/* Tiny coffee cup (for reading cozyness) */}
        <svg
          className="absolute top-32 right-32 w-14 h-14"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 30H70V50H60L55 70H35L30 50H20V30Z" fill="currentColor" />
          <path d="M70 40H80V45H70" stroke="currentColor" strokeWidth="3" />
          <path d="M30 35H50M40 40H50" stroke="white" strokeWidth="2" />
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto text-center mb-16 relative z-10">
        <h2 className="text-4xl font-bold mb-4">Explore the Library</h2>
        <p className="text-gray-400 text-lg">
          Dive into categories that match your mood or curiosity.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12 relative z-10">
        {[
          { label: 'Fiction', icon: BookOpen, color: 'from-pink-500 to-red-500' },
          { label: 'Science', icon: Atom, color: 'from-green-400 to-emerald-500' },
          { label: 'History', icon: Landmark, color: 'from-yellow-400 to-orange-500' },
          { label: 'Self-Help', icon: Heart, color: 'from-blue-400 to-purple-500' },
        ].map(({ label, icon: Icon, color }) => (
          <div
            key={label}
            className={`rounded-2xl p-6 text-center bg-gradient-to-br ${color} hover:scale-105 transform transition shadow-lg hover:shadow-xl`}
          >
            <Icon className="w-10 h-10 mx-auto mb-3" />
            <h3 className="text-xl font-bold">{label}</h3>
          </div>
        ))}
      </div>

      <div className="text-center relative z-10">
        <Link
          href="/books"
          className="inline-block px-6 py-3 text-lg font-semibold rounded-xl bg-purple-600 hover:bg-purple-700 transition hover:shadow-lg hover:-translate-y-0.5"
        >
          Go to Store
        </Link>
      </div>
    </section>
  );
}



// import { BookOpen, Atom, Landmark, Heart } from "lucide-react";
// import Link from "next/link";

// export default function Cards(){
//   return (
//     <section className="bg-zinc-950 text-white py-20 px-6 md:px-12">
//       <div className="max-w-5xl mx-auto text-center mb-16">
//         <h2 className="text-4xl font-bold mb-4">Explore the Library</h2>
//         <p className="text-gray-400 text-lg">
//           Dive into categories that match your mood or curiosity.
//         </p>
//       </div>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
//         {[
//           { label: 'Fiction', icon: BookOpen, color: 'from-pink-500 to-red-500' },
//           { label: 'Science', icon: Atom, color: 'from-green-400 to-emerald-500' },
//           { label: 'History', icon: Landmark, color: 'from-yellow-400 to-orange-500' },
//           { label: 'Self-Help', icon: Heart, color: 'from-blue-400 to-purple-500' },
//         ].map(({ label, icon: Icon, color }) => (
//           <div
//             key={label}
//             className={`rounded-2xl p-6 text-center bg-gradient-to-br ${color} hover:scale-105 transform transition shadow-lg`}
//           >
//             <Icon className="w-10 h-10 mx-auto mb-3" />
//             <h3 className="text-xl font-bold">{label}</h3>
//           </div>
//         ))}
//       </div>

//       <div className="text-center">
//         <Link href="/books" className="inline-block px-6 py-3 text-lg font-semibold rounded-xl bg-purple-600 hover:bg-purple-700 transition">
        
//             Go to Store
      
//         </Link>
//       </div>
//     </section>
//   );
// }
