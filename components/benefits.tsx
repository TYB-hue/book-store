'use client';

import { useEffect, useRef } from 'react';

export default function Benefits() {
  const stats = [
    { number: '38M+', label: 'Books Donated' },
    { number: '$35M+', label: 'Funds Raised for Literacy' },
    { number: '475M+', label: 'Books Reused or Recycled' },
    { number: '87M+', label: 'Customers Served' },
  ];

  const testimonials = [
    { name: 'Laura P.', text: 'Fast delivery and great selection. Love this site!' },
    { name: 'Amina H.', text: 'لم أكن أتوقع أن أجد كل هذه الكتب النادرة بسهولة وسرعة! موقع رائع وخدمة ممتازة.' },
    { name: 'Sally H.', text: 'Awesome experience. Supportive mission and great prices.' },
    { name: 'Laila M.', text: 'أحببت التنوع الكبير في الكتب، من الروايات إلى كتب التنمية. أنصح به بشدة.' },
    { name: 'Youssef A.', text: 'واجهة الموقع مريحة للعين، والبحث عن الكتب سهل وواضح. تجربة ممتعة.' },
    { name: 'John D.', text: 'Great customer service and fast shipping. Highly recommend!' },
    { name: 'Sarah K.', text: "I found rare books here that I couldn't find anywhere else." },
    { name: 'Ali M.', text: 'موقع رائع! الكتب في حالة ممتازة والأسعار معقولة جداً.' },
    { name: 'Phil R.', text: 'Books in excellent condition. Will order again for sure.' },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    let animationFrameId: number;
    const scrollSpeed = 1; // Adjust speed here (lower = slower)
    let isHovered = false;

    const handleHover = () => isHovered = true;
    const handleHoverEnd = () => isHovered = false;

    container.addEventListener('mouseenter', handleHover);
    container.addEventListener('touchstart', handleHover);
    container.addEventListener('mouseleave', handleHoverEnd);
    container.addEventListener('touchend', handleHoverEnd);

    const scroll = () => {
      if (!isHovered) {
        if (container.scrollLeft >= content.scrollWidth / 2) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += scrollSpeed;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mouseenter', handleHover);
      container.removeEventListener('touchstart', handleHover);
      container.removeEventListener('mouseleave', handleHoverEnd);
      container.removeEventListener('touchend', handleHoverEnd);
    };
  }, []);

  return (
    <section className="bg-black text-white py-16 px-4 md:px-20 relative overflow-hidden">
      {/* Benefits */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16">
        {stats.map((item, index) => (
          <div key={index}>
            <p className="text-3xl font-bold text-purple-500">{item.number}</p>
            <p className="text-sm text-white/80">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Review Score */}
      <div className="text-center bg-zinc-900 border border-purple-500 rounded-xl py-10 px-6 shadow-lg max-w-3xl mx-auto mb-16">
        <p className="text-5xl font-bold text-purple-500">4.8 / 5</p>
        <p className="text-white/80 mt-2 text-sm">Based on 646,447 verified reviews</p>
        <div className="flex justify-center gap-1 mt-3">
          {Array(5).fill(null).map((_, i) => (
            <span key={i} className="text-yellow-400 text-xl">★</span>
          ))}
        </div>
        <p className="text-white/60 text-xs mt-3 italic">Shopper Approved</p>
      </div>

      {/* Infinite Testimonials Carousel */}
      <div 
        ref={containerRef} 
        className="overflow-x-auto no-scrollbar relative py-4"
        style={{ scrollbarWidth: 'none' }} // For Firefox
      >
        <div 
          ref={contentRef}
          className="flex gap-6 w-max px-2"
        >
          {[...testimonials, ...testimonials].map((t, index) => (
            <div
              key={index}
              className="min-w-[300px] md:min-w-[360px] max-w-[400px] bg-zinc-800 border border-zinc-700 rounded-2xl p-6 shadow-lg flex-shrink-0 transition-transform duration-300 hover:scale-105"
            >
              <p className="text-white/90 italic text-base leading-relaxed break-words">
                &quot;{t.text}&quot;
              </p>
              <p className="mt-6 font-semibold text-purple-400 text-sm">– {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




















// 'use client';

// import { useEffect, useRef } from 'react';

// export default function Benefits() {
//   const stats = [
//     { number: '38M+', label: 'Books Donated' },
//     { number: '$35M+', label: 'Funds Raised for Literacy' },
//     { number: '475M+', label: 'Books Reused or Recycled' },
//     { number: '87M+', label: 'Customers Served' },
//   ];

//   const testimonials = [
//     { name: 'Laura P.', text: 'Fast delivery and great selection. Love this site!' },
//     { name: 'Amina H.', text: 'لم أكن أتوقع أن أجد كل هذه الكتب النادرة بسهولة وسرعة! موقع رائع وخدمة ممتازة.' },
//     { name: 'Sally H.', text: 'Awesome experience. Supportive mission and great prices.' },
//     { name: 'Laila M.', text: 'أحببت التنوع الكبير في الكتب، من الروايات إلى كتب التنمية. أنصح به بشدة.' },
//     { name: 'Youssef A.', text: 'واجهة الموقع مريحة للعين، والبحث عن الكتب سهل وواضح. تجربة ممتعة.' },
//     { name: 'John D.', text: 'Great customer service and fast shipping. Highly recommend!' },
//     { name: 'Sarah K.', text: 'I found rare books here that I couldn’t find anywhere else.' },
//     { name: 'Ali M.', text: 'موقع رائع! الكتب في حالة ممتازة والأسعار معقولة جداً.' },
//     { name: 'Phil R.', text: 'Books in excellent condition. Will order again for sure.' },
//   ];

//   const containerRef = useRef<HTMLDivElement>(null);

//   // Infinite scroll logic
//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     let animationFrameId: number;

//     const scroll = () => {
//       if (container.scrollLeft >= container.scrollWidth / 2) {
//         container.scrollLeft = 0;
//       } else {
//         container.scrollLeft += 0.5;
//       }
//       animationFrameId = requestAnimationFrame(scroll);
//     };

//     animationFrameId = requestAnimationFrame(scroll);
//     return () => cancelAnimationFrame(animationFrameId);
//   }, []);

//   return (
//     <section className="bg-black text-white py-16 px-4 md:px-20 relative overflow-hidden">
//       {/* Benefits */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16">
//         {stats.map((item, index) => (
//           <div key={index}>
//             <p className="text-3xl font-bold text-purple-500">{item.number}</p>
//             <p className="text-sm text-white/80">{item.label}</p>
//           </div>
//         ))}
//       </div>

//       {/* Review Score */}
//       <div className="text-center bg-zinc-900 border border-purple-500 rounded-xl py-10 px-6 shadow-lg max-w-3xl mx-auto mb-16">
//         <p className="text-5xl font-bold text-purple-500">4.8 / 5</p>
//         <p className="text-white/80 mt-2 text-sm">Based on 646,447 verified reviews</p>
//         <div className="flex justify-center gap-1 mt-3">
//           {Array(5).fill(null).map((_, i) => (
//             <span key={i} className="text-yellow-400 text-xl">★</span>
//           ))}
//         </div>
//         <p className="text-white/60 text-xs mt-3 italic">Shopper Approved</p>
//       </div>

//       {/* Infinite Testimonials Carousel */}
//       <div ref={containerRef} className="overflow-hidden no-scrollbar relative">
//         <div className="flex gap-6 w-max px-2">
//           {[...testimonials, ...testimonials].map((t, index) => (
//             <div
//               key={index}
//               className="min-w-[360px] max-w-[400px] bg-zinc-800 border border-zinc-700 rounded-2xl p-8 shadow-lg flex-shrink-0 transition-transform duration-300 hover:scale-105"
//             >
//               <p className="text-white/90 italic text-base leading-relaxed break-words">
//                 “{t.text}”
//               </p>
//               <p className="mt-6 font-semibold text-purple-400 text-sm">– {t.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
