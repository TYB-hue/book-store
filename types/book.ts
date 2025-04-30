interface Review {
    id: number;
    author: string;
    date: string;
   
    text: string;
    rating: number;
  }
  export interface Book {
    id: number;
    title: string;
    author: string;
    price: number;
    cover: string;
    rating: number;
    category: string;
    description: string;
    releaseDate: string;
    publisher: string;
    pages: number;
    language: string;
    isbn: string;
    aboutAuthor: string;
    reviews: Review[];
  }
  