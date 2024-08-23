const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructing

const books = getBooks();

const book = getBook(2);
book;
// const title = book.title;
// const author = book.author;

const {
  title,
  author,
  publicationDate,
  genres,
  pages,
  reviews,
  hasMovieAdaptation,
} = book;

/* 
console.log(author, title, pages, reviews, pages);

// const primaryGenere = genres[0];
// const secondaryGenere = genres[1];

const [primaryGenere, secondaryGenere, ...othersGenere] = genres;

console.log(primaryGenere, secondaryGenere, othersGenere);

const newgenrs = ["epic Fantasy", ...genres];
console.log(newgenrs);

// spread operator with Objects

const updatedBook = {
  ...book,
  moviePublicationDate: "2021-04-23",
  // pages: 1000,
};
updatedBook;

// An Arrow Function Return value without Writing Any return keyword

/*
  function (str){
  return str.split("-")[0]
  }
*/
/*
const getYear = (str) => str.split("-")[0];

console.log(getYear(publicationDate));
const summary = `${title} and ${pages} -page long book written by ${author} and published in ${getYear(
  publicationDate
)}.The Book is  ${hasMovieAdaptation ? " " : "not"} Adapted By movie`;
summary;

const pagesBooks =
  pages > 1000 ? "Over Thousamd Page book" : "less Thousand Pages";
pagesBooks;

// Logical Operators

console.log(true && "Some String");
console.log(false && "Some String");

console.log(hasMovieAdaptation && "This book has movie");

// && return when both are true
//  falsy value is 0 , Undefined , null, '',
console.log(0 && "hello");
console.log("viren" && "hello mister");

//  || return if one of value are true
console.log(!hasMovieAdaptation || "Movies here");
console.log(true || "some String");
console.log(false || "some String");

console.log(book.translations.spanish);

const isSpanish = book.translations.spanish || "Not translation is Avialable";
isSpanish;

//  here it generate issue If it return value As False as 0
console.log(book.reviews.librarything.reviewsCount);
const reviewCount = book.reviews.librarything.reviewsCount || "no Data";
reviewCount; // here reviews are 0 So if We need Spacific Value Of Data then we are not using Or operator bcz it might be false value possible

// For this Type of problem JS have Solution for it called nullish value Of it. I go for second argument when first value is null or undefined
// If Something Value is 0 Or Empty String Then return that value when first value has 0 or empty string
const count = book.reviews.librarything.reviewsCount ?? "no Data";
count; // here reviews are 0

// Optional Chaining Use

// If We evaluate A undefined Value then it gives An error So we put ? After evaluating that called Chainnig that only evaluate when it have value if undefined then set it to the undefined

function reviewsCountTotal(book) {
  const goodReads = book.reviews.goodreads.reviewsCount;
  const libraryAnything = book.reviews.libraryAnything?.reviewsCount ?? 0;
  libraryAnything;
  goodReads; //
  return goodReads + libraryAnything;
}

console.log(reviewsCountTotal(book));

*/
console.log();
const Books = getBooks();
Books;

//  map methos return new array with changing Existing One by Callback functiom

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
x;

const titles = Books.map((book) => book.title);
titles;

const essentialData = Books.map((book) => ({
  title: book.title,
  author: book.author,
}));
essentialData;

//  Resuce Method Use For Reduceing Array in One Single Value Or number

const totalPages = Books.reduce((acc, book) => acc + book.pages, 0);
console.log(totalPages);

// Sort method , it help to Sort The Array
// Sort method Change Original Array That's Why We Slice Whole Array that make copy of the array & We Sort it
const y = [4, 9, 5, 2, 1];
console.log(y.slice(2, 5));
console.log(y.sort());
y;

const arr = [2, 7, 1, 5, 3];
const Sort = arr.slice().sort((a, b) => a - b);

Sort;
arr;

const sortedBypages = Books.slice().sort((a, b) => b.pages - a.pages);
sortedBypages;

// 1) Create new book

const newBook = {
  id: 6,
  title: "Harray Poter and Demons",
  author: "J.K. ROWLING",
  pages: 678,
};

// Add new book into Array
const AfterAddBook = [...Books, newBook];
AfterAddBook;

// Delete book From the books Array, it reduce a Size of an array so we use filter method to filter out books

const AfterDeleteBook = AfterAddBook.filter((book) => book.id !== 3);
AfterDeleteBook;

// To Update A existing Book array we use Map method it Help to update existing array & return same size of the an array.
const AfterUpdateBook = AfterDeleteBook.map((book) =>
  book.id === 1 ? { ...book, pages: 34 } : book
);
AfterUpdateBook;

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));

// console.log("hello");

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = res.json();
  console.log("helloFrom Todos");
}

const todos = getTodos();
console.log(todos);
console.log("hello From Outside");
