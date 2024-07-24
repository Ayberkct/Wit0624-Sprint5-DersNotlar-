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
