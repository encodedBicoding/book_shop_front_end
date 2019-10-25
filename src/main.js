const books = [
  {
    is_available: true,
    cover_image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1427583285l/25238425.jpg',
    alt:'the_effective_engineer',
    title: 'The Effective Engineer',
    genre: ['Motivational'],
    rating: 3,
    likes: 29,
    reviews: 31,
    year: '2009',
    authors:['Edmond Lau'],
  },
  {
    is_available: true,
    cover_image: 'https://images-eu.ssl-images-amazon.com/images/I/514H6h597qL.jpg',
    alt:'effective_python',
    title: 'Effective Python',
    genre: ['Motivational'],
    rating: 4,
    likes: 29,
    reviews: 31,
    year: '2009',
    authors:['Diomidis Spinellis'],
  },
  {
    is_available: true,
    cover_image: 'https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg',
    alt:'the_lean_startup',
    title: 'The Lean Startup',
    genre: ['Motivational'],
    rating: 4,
    likes: 29,
    reviews: 31,
    year: '2005',
    authors:['Eric Reis'],
  },
  {
    is_available: false,
    cover_image: 'https://i.harperapps.com/covers/9780060566104/x510.jpg',
    alt:'built_to_last',
    title: 'Built To Last',
    genre: ['Business', 'Entrepreneurship'],
    rating: 4,
    likes: 29,
    reviews: 31,
    year: '2001',
    authors:['Jim Collins', 'Jerry I. Porras'],
  },
  {
    is_available: true,
    cover_image: 'https://media.bloomsbury.com/rep/bj/9781408866733.jpeg',
    alt:'big_magic',
    title: 'Big Magic',
    genre: ['Motivational'],
    rating: 4,
    likes: 29,
    reviews: 31,
    year: '2014',
    authors:['Elizabeth Gilbert'],
  },
  {
    is_available: true,
    cover_image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1427583285l/25238425.jpg',
    alt:'the_effective_engineer',
    title: 'The Effective Engineer',
    genre: ['Motivational'],
    rating: 4,
    likes: 29,
    reviews: 31,
    year: '2009',
    authors:['Edmond Lau'],
  },
  {
    is_available: true,
    cover_image: 'https://images-eu.ssl-images-amazon.com/images/I/514H6h597qL.jpg',
    alt:'effective_python',
    title: 'Effective Python',
    genre: ['Motivational'],
    rating: 4,
    likes: 29,
    reviews: 31,
    year: '2009',
    authors:['Diomidis Spinellis'],
  },
  {
    is_available: true,
    cover_image: 'https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg',
    alt:'the_lean_startup',
    title: 'The Lean Startup',
    genre: ['Motivational'],
    rating: 4,
    likes: 29,
    reviews: 31,
    year: '2005',
    authors:['Eric Reis'],
  },
  {
    is_available: false,
    cover_image: 'https://i.harperapps.com/covers/9780060566104/x510.jpg',
    alt:'built_to_last',
    title: 'Built To Last',
    genre: ['Business', 'Entrepreneurship'],
    rating: 4,
    likes: 29,
    reviews: 31,
    year: '2001',
    authors:['Jim Collins', 'Jerry I. Porras'],
  },
  {
    is_available: true,
    cover_image: 'https://media.bloomsbury.com/rep/bj/9781408866733.jpeg',
    alt:'big_magic',
    title: 'Big Magic',
    genre: ['Motivational'],
    rating: 4,
    likes: 29,
    reviews: 31,
    year: '2014',
    authors:['Elizabeth Gilbert'],
  },
  {
    is_available: true,
    cover_image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1427583285l/25238425.jpg',
    alt:'the_effective_engineer',
    title: 'The Effective Engineer',
    genre: ['Motivational'],
    rating: 4,
    likes: 29,
    reviews: 31,
    year: '2009',
    authors:['Edmond Lau'],
  },
  {
    is_available: true,
    cover_image: 'https://images-eu.ssl-images-amazon.com/images/I/514H6h597qL.jpg',
    alt:'effective_python',
    title: 'Effective Python',
    genre: ['Motivational'],
    rating: 4,
    likes: 29,
    reviews: 31,
    year: '2009',
    authors:['Diomidis Spinellis'],
  },
  {
    is_available: true,
    cover_image: 'https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg',
    alt:'the_lean_startup',
    title: 'The Lean Startup',
    genre: ['Motivational'],
    rating: 4,
    likes: 29,
    reviews: 31,
    year: '2005',
    authors:['Eric Reis'],
  },
  {
    is_available: false,
    cover_image: 'https://i.harperapps.com/covers/9780060566104/x510.jpg',
    alt:'built_to_last',
    title: 'Built To Last',
    genre: ['Business', 'Entrepreneurship'],
    rating: 4,
    likes: 29,
    reviews: 31,
    year: '2001',
    authors:['Jim Collins', 'Jerry I. Porras'],
  },
  {
    is_available: true,
    cover_image: 'https://media.bloomsbury.com/rep/bj/9781408866733.jpeg',
    alt:'big_magic',
    title: 'Big Magic',
    genre: ['Motivational'],
    rating: 4,
    likes: 29,
    reviews: 31,
    year: '2014',
    authors:['Elizabeth Gilbert'],
  }
]
const startApp = () => {
  const featured_image_container = document.querySelector('.featured_books');
  
  books.forEach((book) => {
    const fbe = document.createElement('div');
    fbe.setAttribute('class', 'featured_books_cell');
    const child = createFeatChild(book);
    fbe.innerHTML = child;
    featured_image_container.append(fbe)
    return fbe;
  });

  function calcStarsToReturn(obj){
    const doc = document.createElement('div');
    if( typeof obj.rating !== 'number') {
      obj.rating = Number(obj.rating);
    }
    for( var i=0; i<obj.rating; i++) {
      const span = document.createElement('span');
      span.setAttribute('class', 'fa fa-star active');
      span.setAttribute('id', 'gdl');
      doc.appendChild(span);
    }
    if(Array.from(doc).length !== 5) {
      const val =  5 - obj.rating;
      for(var i=0; i<val; i++) {
        const span = document.createElement('span');
        span.setAttribute('class', 'fa fa-star inactive');
        span.setAttribute('id', 'gdl');
        doc.appendChild(span);
      }
    }
    return doc.innerHTML;
  }
  function createFeatChild(obj) {
    return `
    <div class='book_details_container abs_dt'>
      <div class='book_details bk_flex'>
        <p class='${obj.is_available ? 'bdl av bdl_avial' : 'bdl nt_av bdl_avial'}'>
        ${obj.is_available ? 'Available' : 'Borrowed Out'}
        </p>
        <div class='bdl bk_t'>
          <h4 id='bk_t_h'>${obj.title}</h4>
          <p id='bt_t_a'>${obj.authors.join(',')}</p>
          <p id='bt_t_y'>${obj.year}</p>
        </div>
        <div class='bdl bk_type'>
          <p id='bk_type_g'>Genre: </p>
          <span>${obj.genre.join(', ')}</span>
        </div>
        <div class='bdl bdl_flex rgt'>
          <div class='rgt_rt_c'>
              <p id='rgt_rt'>Ratings: </p>
              <span>${obj.rating.toFixed(1)}</span>
              <div class='rgt_rt_star'>
              ${
                calcStarsToReturn(obj)
              }
              </div>
          </div>
          <div class='rgt_rt flx_rw'>
              <div class='rgt_rt_lt'>
                <span class='fa fa-users'/>
                <p>${obj.reviews}</p>
              </div>
              <div class='rgt_rt_lt'>
                <span class='fa fa-heart'/>
                <p>${obj.likes}</p>
              </div>
          </div>
        </div>
      </div>
  </div>
  <img src='${obj.cover_image}' alt='${obj.alt}'> `
  }
};

startApp();


const carousel = new Flickity('.featured_books');