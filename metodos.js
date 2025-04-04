function sortByYear(book1, book2){
    if(book1.releaseYear > book2.releaseYear){
      return 1;
    }else if(book1.releaseYear < book2.releaseYear){
      return -1;
    }else{
      return 0;
    }
  }
  
  const books = [
    {title: "Titulo1", authorName: "Messi", releaseYear: 1800},
    {title: "Titulo2", authorName: "Paco", releaseYear: 2003},
    {title: "Titulo3", authorName: "Yo", releaseYear: 2002}
  ];
  
  const filteredBooks = books.filter((book) => book.releaseYear > 1950);
  
  filteredBooks.sort(sortByYear)
  