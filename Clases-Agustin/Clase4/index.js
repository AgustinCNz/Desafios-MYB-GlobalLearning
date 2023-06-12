 
  const books = [
    { title: 'El Aleph', author: 'Jorge Luis Borges' },
    { title: 'La ciudad y los perros', author: 'Mario Vargas Llosa' },
    { title: 'Cien años de soledad', author: 'Gabriel García Márquez' },
    { title: 'Rayuela', author: 'Julio Cortázar' },
    { title: 'Ficciones', author: 'Jorge Luis Borges' },
    { title: 'El hacedor', author: 'Jorge Luis Borges' },
    { title: 'Los pasos perdidos', author: 'Alejo Carpentier' },
    { title: 'El reino de este mundo', author: 'Alejo Carpentier' },
    { title: 'La fiesta del chivo', author: 'Mario Vargas Llosa' },
    { title: 'La tía Julia y el escribidor', author: 'Mario Vargas Llosa' },
    { title: 'Crónica de una muerte anunciada', author: 'Gabriel García Márquez' },
    { title: 'El amor en los tiempos del cólera', author: 'Gabriel García Márquez' },
    { title: 'Bestiario', author: 'Julio Cortázar' },
    { title: 'Las armas secretas', author: 'Julio Cortázar' }
  ];
  
  let searchAuthor = "Borges";

  const filterBooksByAuthor = (books, searchAuthor) => {
    const authorFilteredBooks = books
    .filter((books) => {
      const authorFullName = book.author;

      return ( 
        authorFullName.includes(searchAuthor) ||
        authorFullName.split(' ').some((word) => word.includes(searchAuthor))
      );
        })

        return authorFilteredBooks;
  };

  const filteredBooks = filterBooksByAuthor(vooks, searchAuthor);
  console.table(filteredBooks)

  //Aqui creamos un nuevo array que contenga el nuevo autor sin afectar el originial con {...book}

  filteredBooks.forEach(book => {
    const newArray = {...book};
    book.author = "Agustin";
  })

  console.table(books)

  /* Aqui tengo */
  /* const inventedAuthor = "Agustin"*/
  /* const authorChanged = authorFilteredBooks.map((title) => {
    return { title, author: inventedAuthor };
  }) */
