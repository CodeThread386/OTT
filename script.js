const tvShows = [
    { 
      title: 'The Wheel of Time', 
      description: 'A high fantasy series following a group of heroes in a battle against an ancient evil.', 
      image: 'https://i.redd.it/fz6lmezxw1s71.jpg',
      year: '2021', 
      rating: '7.9/10', 
      genres: 'Fantasy, Adventure, Drama',
      videoURL: 'https://www.youtube.com/embed/NZinbjh9UQw?si=TVo_8Cm_ZCKeAoBx', 
      bigDes: 'The Wheel of Time is an epic fantasy saga adapted from Robert Jordan’s acclaimed novels, following a courageous heroine and a band of unlikely heroes. They journey through a richly detailed world full of magic, prophecy, and ancient powers. Moiraine, a dedicated Aes Sedai, leads them on a perilous quest to identify the Dragon Reborn, whose destiny will either save or doom their world. Battles between light and darkness unfold as alliances form and secrets unravel, challenging the characters’ courage, faith, and destiny in an immersive tale of adventure, sacrifice, and hope. A timeless journey that inspires all dedicated viewers.'
    },
    { 
      title: 'Euphoria', 
      description: 'A gritty drama series exploring the complex lives of modern teenagers facing love, trauma, and self-discovery.', 
      image: 'https://image.tmdb.org/t/p/original/orOwZi6HGYPzLb1LFTHSfepEGqZ.jpg',
      year: '2019', 
      rating: '8.4/10', 
      genres: 'Drama, Teen, Coming-of-age',
      videoURL: 'https://www.youtube.com/embed/YMUWB3RjU8g?si=tZ11CSJ7zfggamhx', 
      bigDes: 'Euphoria is a groundbreaking drama series that explores the raw realities of modern adolescence. With vivid storytelling and bold visuals, it delves into themes of identity, addiction, love, and trauma. The series follows a diverse group of teenagers as they navigate complex relationships and internal struggles while confronting societal pressures. Each character’s journey is portrayed with emotional intensity and authenticity, challenging traditional narratives about youth culture. Innovative cinematography and a powerful soundtrack enhance its immersive experience, making Euphoria a provocative, visually stunning, and emotionally compelling exploration of contemporary life.'
    },
    { 
      title: 'Stranger Things', 
      description: 'A group of kids uncover supernatural mysteries in their small town.', 
      image: 'https://cdn.europosters.eu/image/750/posters/stranger-things-seasons-i132237.jpg',
      year: '2016', 
      rating: '8.8/10', 
      genres: 'Drama, Fantasy, Horror',
      videoURL:'https://www.youtube.com/embed/NSoicitBVgY?si=AG7A2_kdNaXbvEzG',
      bigDes:'Stranger Things is a gripping, nostalgic sci-fi horror series that masterfully blends supernatural mystery with heartfelt coming-of-age drama. Set in the 1980s in the small town of Hawkins, Indiana, it follows a group of resourceful children as they search for their missing friend and uncover terrifying secrets. As they navigate a world filled with government conspiracies, sinister experiments, and creatures from the mysterious Upside Down, the young heroes demonstrate courage and loyalty. With its atmospheric visuals, captivating storytelling, and unforgettable characters, Stranger Things offers an immersive journey into a realm where everyday life collides with supernatural terror that enthralls viewers.'
    }
  ];
  
  const movies = [
    { 
      title: 'Big Stan', 
      description: 'A comedy where a con artist hires a martial arts guru to survive prison.', 
      image: 'https://www.movieposters.com/cdn/shop/products/91bac97b872014cce831a2f6f43e2b44_7846cc33-5d97-4b0e-9a2a-d25f8713d36c_480x.progressive.jpg?v=1573653869',
      year: '2007/2009', 
      rating: '6.1/10', 
      genres: 'Action, Comedy', 
      runtime: '105 min', 
      director: 'Rob Schneider', 
      videoURL:'https://www.youtube.com/embed/5awNvWq30j8?si=myd0y0oa7ZUR2dB2',
      bigDes:'Big Stan is a quirky comedy that follows a wealthy con artist facing a long prison sentence for his dubious schemes. Terrified of the brutality behind bars, he hires a mysterious martial arts instructor to learn how to defend himself. Once inside, his newfound skills transform him from a hapless fraudster into an unlikely hero, commanding respect and turning the tables on his adversaries. The film blends outrageous humor with moments of surprising depth, as Stan embarks on a journey of personal transformation and redemption. With unexpected twists and plenty of laughs, Big Stan offers an offbeat yet heartwarming look at survival against all odds.'
    },
    { 
      title: 'Bridge to Terabithia', 
      description: 'A heartwarming tale of friendship and an imaginary kingdom.', 
      image: 'https://image.tmdb.org/t/p/original/c6iTdD4UvpfDCOFb3BTYb1TpKki.jpg',
      year: '2007', 
      rating: '7.2/10', 
      genres: 'Fantasy, Drama', 
      runtime: '95 min', 
      director: 'Gábor Csupó', 
      videoURL:'https://www.youtube.com/embed/te_q8AStbvA?si=4pPSqTfJ55b50tP2', 
      bigDes:'Bridge to Terabithia is a poignant fantasy drama that follows the transformative friendship between Jess, a reserved boy with big dreams, and Leslie, the spirited new girl at school. In their ordinary world, they create Terabithia—a magical kingdom where imagination flourishes and challenges are transcended. As they explore this secret land, they discover courage, self-acceptance, and the bittersweet realities of life. The film masterfully blends elements of adventure, loss, and hope, illustrating how friendship can illuminate the darkest moments and inspire us to see the beauty in our everyday struggles.'
    },
    { 
      title: 'Frank vs God', 
      description: 'A quirky comedy where a man sues God after a tornado ruins his life.', 
      image: 'https://m.media-amazon.com/images/M/MV5BMTg5NTYzMjkzMV5BMl5BanBnXkFtZTgwNjMyNjQ4MTE@._V1_FMjpg_UX1000_.jpg',
      year: '2014', 
      rating: '6.2/10', 
      genres: 'Comedy', 
      runtime: '100 min', 
      director: 'Stewart Schill', 
      videoURL:'https://www.youtube.com/embed/7pc759kA_mw?si=Y-AD3qUwm7YOcKXQ', 
      bigDes:'Frank vs God is a quirky, offbeat comedy that challenges conventional ideas of faith and fate. After a series of bizarre misfortunes, Frank, an ordinary man, finds himself taking an unlikely stand against the divine. Convinced that cosmic forces have wronged him, he embarks on a surreal legal battle, questioning the very nature of destiny and accountability. The film blends absurd humor with moments of poignant reflection, inviting audiences to laugh while contemplating the mysteries of life. With its bold narrative and unconventional approach, Frank vs God delivers a refreshing, thought-provoking experience that is as humorous as it is daring.'
    },
    { 
      title: 'Need for Speed (2014)', 
      description: 'A street racer seeks redemption and revenge on a cross-country race.', 
      image: 'https://m.media-amazon.com/images/M/MV5BMTQ3ODY4NzYzOF5BMl5BanBnXkFtZTgwNjI3OTE4MDE@._V1_QL75_UX190_CR0,0,190,281_.jpg',
      year: '2014', 
      rating: '6.4/10', 
      genres: 'Action, Crime, Thriller', 
      runtime: '130 min', 
      director: 'Scott Waugh',
      videoURL:'https://www.youtube.com/embed/gbviiwPWico?si=U2GgywBd2Ny4xXtN', 
      bigDes:'Need for Speed (2014) is a high-octane action film that revs the engine of adrenaline and thrills. Based on the popular video game series, the movie follows skilled street racer Tobey Marshall, who is framed for a crime by a corrupt rival. After serving time behind bars, Tobey returns to the streets with a burning desire for revenge and redemption. Embarking on a dangerous, cross-country race, he confronts high-speed chases, adversaries, and formidable obstacles. With breathtaking stunts and visceral performances, the film immerses audiences in a world where speed, courage, and determination define survival and the pursuit of justice truly.'
    },
    { 
      title: 'The Substitute', 
      description: 'An undercover mercenary poses as a substitute teacher to fight school violence.', 
      image: 'https://m.media-amazon.com/images/M/MV5BNjU3MTc2YzUtZmJmMy00Y2I1LWJkOGMtMmFlMTQ2ZjJlY2Y2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      year: '1996', 
      rating: '6.0/10', 
      genres: 'Action, Thriller', 
      runtime: '114 min', 
      director: 'Robert Mandel', 
      videoURL:'https://www.youtube.com/embed/ptrCBlS6cw4?si=dlFPRZU5dX9fiiSE', 
      bigDes:'The Substitute is a hard-hitting action thriller that plunges viewers into the underbelly of urban high schools where danger lurks at every corner. When a respected teacher becomes a target of a vicious student gang, a battle-hardened former special forces operative goes undercover as a substitute, determined to restore order and protect innocent lives. With raw intensity and relentless action, the film explores themes of redemption, justice, and the struggle against corruption in an environment rife with violence. Its gritty narrative, coupled with adrenaline-fueled fight scenes and a compelling lead performance, delivers a powerful and unforgettable cinematic experience.'
    },
    { 
      title: 'The House on the Hill', 
      description: 'A mysterious thriller where a woman returns to her hometown and finds secrets lurking.', 
      image: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10905341_p_v8_ak.jpg',
      year: '2019', 
      rating: 'N/A', 
      genres: 'Thriller', 
      runtime: '85 min', 
      director: 'Nadeem Soumah', 
      videoURL:'https://www.youtube.com/embed/JOW2N5A3nkU?si=o89aAR4YiUxLE-Ww', 
      bigDes:'The House on the Hill is a suspenseful thriller that immerses viewers in a world of mystery and psychological tension. When Megan returns to her quaint hometown after years away, she is confronted with the inexplicable disappearance of her brother. The locals’ eerie indifference and the town’s dark secrets force her to question everything she once believed. As she embarks on a harrowing quest to uncover the truth, layers of deception and a haunting past gradually unfold. Blending supernatural elements with raw human emotion, the film captivates with atmospheric visuals and relentless suspense, leaving audiences spellbound until its chilling climax.'
    },
    { 
      title: 'Free Birds', 
      description: 'Animated adventure where two turkeys time-travel to change Thanksgiving history.', 
      image: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9991381_p_v8_as.jpg',
      year: '2013', 
      rating: '5.8/10', 
      genres: 'Animation, Adventure, Comedy', 
      runtime: '91 min', 
      director: 'Jimmy Hayward', 
      videoURL:'https://www.youtube.com/embed/2qBkPQqVr_w?si=I3PXRt6aLMveXjvI', 
      bigDes:'Free Birds is an animated adventure comedy that launches viewers on an extraordinary, time-traveling quest. Two plucky turkeys, led by an unlikely duo, defy tradition as they journey back to the very first Thanksgiving to alter history and spare their species from becoming the holiday meal. Vibrant animation and witty humor combine to create a fun-filled romp that entertains children and adults alike. As they confront zany challenges and unexpected twists along the way, their courageous spirit and bond of friendship shine through. Ultimately, Free Birds is a heartwarming tale about rewriting destiny and celebrating the joy of change, truly.'
    },
    { 
      title: 'Unfriended: Dark Web', 
      description: 'A horror thriller that delves into the terrifying secrets of the dark web.', 
      image: 'https://resizing.flixster.com/CO8A_gI5u07lhe8nPCTFgSokd2Q=/206x305/v2/https://resizing.flixster.com/ThOlilt417STTuSvgInLTvybLWk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U0OTExNzNlLTUxNjQtNDdhZS04NzJlLTFiZGM3NDRmZDE2YS53ZWJw',
      year: '2018', 
      rating: '6.0/10', 
      genres: 'Horror, Mystery, Thriller', 
      runtime: '92 min', 
      director: 'Stephen Susco', 
      videoURL:'https://www.youtube.com/embed/S0MZ6cXmYKo?si=_XvuvvqO7gutRFpC', 
      bigDes:'Unfriended: Dark Web is a chilling horror thriller that plunges audiences into the terrifying world of online anonymity. When a group of friends unwittingly stumble upon a hidden computer, they become entangled in a sinister web of secrets, surveillance, and cyber revenge. As the digital footprint grows, their darkest fears materialize, and each click unveils a new layer of malevolence. The film deftly merges modern technology with traditional ghost story elements, questioning privacy, morality, and the price of digital freedom. Its suspenseful narrative and innovative screenlife format deliver a uniquely immersive and unsettling experience. A must-watch for digital horror enthusiasts.'
    },
    { 
      title: 'The Map Reader', 
      description: 'A New Zealand drama about a teenager finding solace in maps and unexpected relationships.', 
      image: 'https://cdn.moviefone.com/image-assets/26374/AhIUyqUzKptqioshliJ4nO5Fi2O.jpg?d=360x540&q=60',
      year: '2008', 
      rating: 'N/A', 
      genres: 'Drama', 
      runtime: '90 min', 
      director: 'Harold Brodie', 
      videoURL:'https://www.youtube.com/embed/_m4xPr274gw?si=KvAJv2JrLyTep87K', 
      bigDes:'The Map Reader is a heartfelt New Zealand drama that chronicles the transformative journey of a reserved teenager who finds solace and inspiration in the art of cartography. In a small town where emotions often remain unspoken, his fascination with maps becomes a metaphor for exploring the intricate terrain of his inner world. As he deciphers the language of lines and contours, unexpected friendships and poignant encounters unfold, revealing the hidden beauty within his life. With delicate storytelling and evocative visuals, the film invites viewers on a reflective voyage through the uncharted landscapes of both geography and the human heart.'
    },
    { 
      title: 'The Lady of Heaven', 
      description: 'A historical drama intertwining modern and ancient narratives about faith and sacrifice.', 
      image: 'https://upload.wikimedia.org/wikipedia/en/0/03/The_lady_of_heaven_poster.png',
      year: '2021', 
      rating: '6.1/10', 
      genres: 'Historical Drama', 
      runtime: '141 min', 
      director: 'Eli King', 
      videoURL:'https://www.youtube.com/embed/bc9q__VbYL4?si=X5RGColpYVszW8V4', 
      bigDes:'The Lady of Heaven is a profound historical drama that weaves together modern and ancient narratives to explore the enduring legacy of Lady Fatima, daughter of the Prophet Muhammad. Set against a backdrop of political turmoil and religious strife, the film follows her trials, sacrifices, and unwavering strength in the face of adversity. Through rich storytelling and evocative visuals, it delves into themes of faith, honor, and the human spirit, inviting viewers to reflect on the transformative power of compassion and resilience. Controversial yet captivating, the film offers a nuanced portrayal of a revered figure and her timeless influence profoundly.'
    }
  ];
  
  const suggestionsData = [...tvShows, ...movies];
  
  // ---------------- Watchlist Functions ----------------
  let watchlist = [];
  
  function renderWatchlist() {
    const container = document.getElementById('watchlistItems');
    if (!container) return;
    container.innerHTML = '';
    watchlist.forEach((item, index) => {
      container.innerHTML += `
        <div class="watchlist-card" onclick="handleCardClick('${item.title}', '${item.image}', '${item.description}', '${item.year}', '${item.rating}', '${item.genres}', '${item.runtime || ''}', '${item.director || ''}', '${item.videoURL}', '${item.bigDes}')">
          <img src="${item.image}" alt="${item.title}">
          <h3>${item.title}</h3>
          <button style="margin-top:5px;" class="btn" onclick="event.stopPropagation(); removeFromWatchlist(${index})">Remove</button>
        </div>
      `;
    });
  }
  
  function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(() => {
      notification.style.display = 'none';
    }, 3000);
  }
  
  function addToWatchlist(title, image, description, year, rating, genres, runtime, director, videoURL, bigDes) {
    if (!watchlist.find(item => item.title === title)) {
      watchlist.push({ title, image, description, year, rating, genres, runtime, director, videoURL, bigDes });
      renderWatchlist();
      showNotification(`${title} added to Watchlist!`);
    } else {
      showNotification(`${title} is already in your Watchlist!`);
    }
  }
  
  function removeFromWatchlist(index) {
    watchlist.splice(index, 1);
    renderWatchlist();
  }
  
  function addMovieManually() {
    const input = document.getElementById('watchlistInput');
    const title = input.value.trim();
    if (!title) return;
  
    const foundMovie = suggestionsData.find(item => item.title.toLowerCase() === title.toLowerCase());
    
    if (foundMovie) {
      addToWatchlist(
        foundMovie.title,
        foundMovie.image,
        foundMovie.description,
        foundMovie.year,
        foundMovie.rating,
        foundMovie.genres,
        foundMovie.runtime || '',
        foundMovie.director || '',
        foundMovie.videoURL,
        foundMovie.bigDes
      );
    } else {
      const randomImage = "https://picsum.photos/220/330?random";
      addToWatchlist(
        title,
        randomImage,
        "User added movie",
        "N/A",
        "N/A",
        "N/A",
        "",
        "",
        "https://www.youtube.com/embed/dQw4w9WgXcQ",
        ""
      );
    }
    input.value = "";
  }
  
  function clearWatchlist() {
    watchlist = [];
    renderWatchlist();
  }
  
  // ---------------- Main Page & Modal Functions ----------------
  function createMediaCard(item) {
    return `
      <div class="movie-card" onclick="handleCardClick('${item.title}', '${item.image}', '${item.description}', '${item.year}', '${item.rating}', '${item.genres}', '${item.runtime || ''}', '${item.director || ''}', '${item.videoURL}', '${item.bigDes}')">
        <img src="${item.image}" alt="${item.title}">
        <div class="movie-info">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
      </div>
    `;
  }
  
  // Render TV Shows & Movies on Main Page
  tvShows.forEach(item => { document.getElementById('tvshows-row').innerHTML += createMediaCard(item); });
  movies.forEach(item => { document.getElementById('movies-row').innerHTML += createMediaCard(item); });
  
  function handleCardClick(title, image, description, year, rating, genres, runtime, director, videoURL, bigDes) { 
    openModal(title, image, description, year, rating, genres, runtime, director, videoURL, bigDes); 
  }
  
  function openModal(title, image, description, year, rating, genres, runtime, director, videoURL, bigDes) {
    document.getElementById('modal-poster').src = image;
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-year').textContent = year;
    document.getElementById('modal-rating').textContent = rating;
    document.getElementById('modal-genres').textContent = genres;
    document.getElementById('modal-description').textContent = (description + (runtime ? "\nRuntime: " + runtime : "") + (director ? " | Director: " + director : "") + (bigDes ? "\n\n" + bigDes : ""));
    document.getElementById('modal-add-button').onclick = function() {
      addToWatchlist(title, image, description, year, rating, genres, runtime, director, videoURL, bigDes);
      closeModal();
    };
    
    window.currentVideoURL = videoURL;
    window.currentBigDes = bigDes;
    
    document.getElementById('modal').style.display = 'flex';
  }
  
  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }
  
  // ---------------- Details View Functions ----------------
  function showDetails() {
    const title = document.getElementById('modal-title').textContent;
    const year = document.getElementById('modal-year').textContent || '2024';
    const rating = document.getElementById('modal-rating').textContent || 'PG-13';
    const genres = document.getElementById('modal-genres').textContent || 'Action, Drama';
    const description = document.getElementById('modal-description').textContent;
    const videoURL = window.currentVideoURL || '';
    const bigDes = window.currentBigDes || '';
    let template = document.getElementById('details-template').innerHTML;
    template = template.replace(/{{title}}/g, title)
                       .replace(/{{year}}/g, year)
                       .replace(/{{rating}}/g, rating)
                       .replace(/{{genres}}/g, genres)
                       .replace(/{{description}}/g, description)
                       .replace(/{{videoURL}}/g, videoURL)
                       .replace(/{{bigDes}}/g, bigDes);
    document.getElementById('main-content').innerHTML = template;
    renderDetailsSuggestions();
    closeModal();
    window.scrollTo(0, 0);
  }
  
  function renderDetailsSuggestions() {
    const container = document.getElementById('details-suggestions');
    container.innerHTML = '';
    suggestionsData.forEach(item => {
      container.innerHTML += `
        <div class="suggestion-card" onclick="updateDetailsView('${item.title}', '${item.image}', '${item.description}', '${item.year}', '${item.rating}', '${item.genres}', '${item.runtime}', '${item.director}', '${item.videoURL}', '${item.bigDes}')">
          <img src="${item.image}" alt="${item.title}">
          <h4>${item.title}</h4>
        </div>
      `;
    });
  }
  
  function updateDetailsView(title, image, description, year, rating, genres, runtime, director, videoURL, bigDes) {
    document.getElementById('detail-movieTitle').textContent = title;
    document.getElementById('detail-movieYear').textContent = year;
    document.getElementById('detail-movieRating').textContent = rating;
    document.getElementById('detail-movieGenres').textContent = genres;
    document.getElementById('detail-movieDescription').textContent = description + '\n' + bigDes;
    document.getElementById('videoPlayer').src = videoURL;
  }
  
  // ---------------- Main View Restoration ----------------
  let mainViewHTML;
  window.addEventListener('DOMContentLoaded', () => {
    mainViewHTML = document.getElementById('main-content').innerHTML;
    renderWatchlist();
  });
  
  function loadMain() {
    document.getElementById('main-content').innerHTML = mainViewHTML;
    document.getElementById('tvshows-row').innerHTML = '';
    document.getElementById('movies-row').innerHTML = '';
    tvShows.forEach(item => { document.getElementById('tvshows-row').innerHTML += createMediaCard(item); });
    movies.forEach(item => { document.getElementById('movies-row').innerHTML += createMediaCard(item); });
    renderWatchlist();
  }
  
  // Mobile Hamburger Toggle Functionality
  function toggleMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navbarMenu = document.getElementById('navbar-menu');
    const navbar = document.getElementById('navbar');
    
    hamburger.classList.toggle('active');
    navbarMenu.classList.toggle('active');
    
  }
  
  // Close mobile menu when clicking outside of it
  function closeMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navbarMenu = document.getElementById('navbar-menu');
    const navbar = document.getElementById('navbar');
    
    if (navbarMenu.classList.contains('active')) {
      hamburger.classList.remove('active');
      navbarMenu.classList.remove('active');
    }
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    // Enable mobile toggle if screen width < 669px
    function checkMobile() {
      if (window.innerWidth < 669) {
        document.getElementById('hamburger').addEventListener('click', toggleMobileMenu);
      } else {
        document.getElementById('navbar-menu').classList.remove('active');
        document.getElementById('hamburger').classList.remove('active');
      }
    }
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Close mobile menu when clicking anywhere outside the navbar-menu and hamburger icon
    document.addEventListener('click', function(event) {
      const target = event.target;
      const hamburger = document.getElementById('hamburger');
      const navbarMenu = document.getElementById('navbar-menu');
      
      if (window.innerWidth < 669 && !hamburger.contains(target) && !navbarMenu.contains(target)) {
        closeMobileMenu();
      }
    });
    
    // Modify loadMain() so that when a nav link is clicked, mobile menu closes.
    const originalLoadMain = window.loadMain;
    window.loadMain = function() {
      if (window.innerWidth < 669) {
        closeMobileMenu();
      }
      if (typeof originalLoadMain === 'function') {
        originalLoadMain();
      }
    };
  });
