// ---------------------- COMPONENT KAVRAMI ---------------------
// Yeniden kullanmayı planladığımız tüm şeylere component denir.
// Sayfada tekrar etmesi gerekiyor. Büyüklüğünden ve şeklinden bağımsızdır.
//Aanahtar kelime tekrar ediyor olması ve içinde birkaç eleman olması gerekli.
// Yeniden kullanılabilirlerdir.
//Atom - element benzetirsek , atomlar html elemanları , elementler componentlardır.

// HTML etiketleri ön tanımlıdır kendi kafamıza göre değiştiremeyiz, değişken saklayamayız, fonksiyon vedöngü kuramayız.

//Aşağıda Yorum satırı oluşturduk ve sayfaya ekledik .

const avatar = document.createElement("img");
avatar.classList.add("comment-avatar");
avatar.src = "https....";

const data = document.createElement("div");
data.classList.add("comment-data");

const author = document.createElement("h3");
author.classList.add("comment-author");
author.textContent = " Ayberk Çetinkaya ";

const message = document.createElement("p");
message.classList.add("comment-message");
message.textContent = " Harika ! ";

data.appendChild(author);
data.appendChild(message);

const wrapper = document.createElement("div");
wrapper.classList.add("comment");

wrapper.appendChild(avatar);
wrapper.appendChild(data);

const commnedWrapper = document.getElementById("yorumlar");
commnedWrapper.appendChild(wrapper);

// örnek 2 ;
const movies = [
  {
    title: "Star Wars",
    rating: "16+",
    duration: "2h 5min",
    url: "https://youtube.com/jhjhjh",
  },
  {
    title: "Star Wars 2",
    rating: "16+",
    duration: "3h 5min",
    url: "https://youtube.com/jhjhjh",
  },
  {
    title: "Star Wars 3",
    rating: "16+",
    duration: "4h 5min",
    url: "https://youtube.com/jhjhjh",
  },
  {
    title: "Star Wars 4",
    rating: "16+",
    duration: "4h 5min",
    url: "https://youtube.com/jhjhjh",
  },
  {
    title: "Star Wars 5",
    rating: "16+",
    duration: "4h 5min",
    url: "https://youtube.com/jhjhjh",
  },
];
/* div.movie-card h3 div span.rating span.duration button */
for (let movie of movies) {
  const card = document.createElement("div");
  card.classList.add("movie-card");
  const title = document.createElement("h3");
  title.textContent = movie.title;
  card.appendChild(title);
  const container = document.createElement("div");
  const rating = document.createElement("span");
  rating.classList.add("rating");
  rating.textContent = movie.rating;
  const duration = document.createElement("span");
  duration.classList.add("duration");
  duration.textContent = movie.duration;
  container.append(rating, duration);
  card.appendChild(container);
  const button = document.createElement("button");
  button.textContent = "Play";
  button.addEventListener("click", () => {
    window.redirect(movie.url);
  });
  card.appendChild(button);
  document.querySelector("#root").appendChild(card);
}

// fonksiyonlara parametre gireresek aynı component dan farklı farklı sonuçlar elde edebiliriz.

//Döngüler
array.forEach((element) => {
  console.log(element); //====> return value su yok.
});

const elements = array.map((element) => console.log(element)); //=======>>>>> sonuçlardan oluşan bir array döner.

const favs = ["Matrix", "Dune", "Persona"];

const items = favs.map(createFavMovie);

items.forEach((movie) => {
  favList.appendChild(movie);
});
