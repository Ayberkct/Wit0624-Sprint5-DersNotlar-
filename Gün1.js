/*   Sprint 5 Ders Notları */
/* React Başladı */
/* 
React bir frameworktür.
Temel faydalarını öğrenecez.
İlk ders Dom Manipülasyonları ile başlayacaz.
*/

/* 
HTML Statik veri göstermek için bir sunum dilidir. Kendiliğinden DEĞİŞMEZ.
Documentt Object Model (DOM) Browser HTML dosyasını okuyup bir JS  objesi oluşturur.
Sayfadaki değişiklikler bu obje üzerinden yapılır, HTML değiştirmeye gerek kalmaz.
*/

/*
Dom, bir web sayfasının canlı, interaktif bir temsilidir ve sayfadaki değişiklikler bu yapı üzerinde gerçekleştirilir.
*/

/*
HTML: Ev Planı 
Dom: Ev'in kendisidir.
*/

/*
Her bir HTML tagini onu temsil eden bir objeye dönüştürür.
Bu objeleri taglerin arasındaki parent-child ilişkisine göre bir ağaç yapısına yerleştirir.
HTML body gibi elemanlar ağacın ana gövdesine yakın olur. Bunların içindekiler ise ağacın daha üstteki dallarında yer alır
Dom ağacının kökünde document objesi bukunurç
Bu objeler DOM ağacındaki yerlerine node , yani düğüm denir.
Tagler HTML dosyasında bulundukları konuma göre yabş sahip oldukları parent child ilişkilerine göre DOM ağacına yerleştirilir.
*/

// JS nereye yazılır ?
//Ayrı bir dosyada ise !! <script src="dosyaYolu/dosyaAdi.js"></script>  veya !!html dosyasının içine <script> </script>
// HTML içine yazacaksak Özellikle sayfasının altında body taginin kapanışından hemen önce yazılmalı. (ÖRNEĞİ HMTL DOSYASINDA !!)
// Bunun sebebi sayfanın açılış performansının yüksek olması için yapılır.!!!

//document; //merkezimiz
//document.title; // sayfanın o anki başlığını görürürüz
//document.title = "elma"; // sayfanın başlığını değişitiririz.
//!!!!!! sayfa yenilenirse değişiklikler başa döner! Kaydetmemiz gerekli !!

// js OBJELERİ İÇİNDE DOT OPERATÖRÜ KULLANMAK VERİMSİZ , ÇOK İÇ İÇE ELEMAN OLABNİLİR.
//document.body.ariaValueMin.section.article.div.div; //   VERİMSİZ YANLIŞ XXXXXXXXX

// Elemanları özelliklerine göre seçmeliyiz.
//const Button = document.getElementById("acKapa"); // elemanın id sinden yakaladığmız metot
//document.getElementsByClassName("acKapa"); // Class name ine göre yakalar
//document.getElementsByName("acKapa"); // adına göre yakalar.
//document.getElementsByTagName("p"); // tag name ine göre yakalar

document.getElementById("acKapa").textContent = "Çetinkaya"; // acKapa id sine ait tagin textini değiştirmek için kullanılır.0
document.getElementById("ad").style.color = "white";

document.querySelector("body").style.backgroundColor = "orange"; //  ===>>>> CSS değiştirmek için önce style.yazılır!!!!!!

document.querySelectorAll(".photos img"); // ===>>> parantez içindeki selectorle eşleşen her elemanı seçer . BİR ARRAY DÖNER.  ( FOTOĞRAFIN ALTINDAKİ İMG LER DEMEKTİR)
document.querySelector("body"); // ===> parantez içindeki selectorle eşleşen ilk elemanı seçer. TEK BİR DOM OBJESİ DÖNER

const imgs = document.querySelectorAll("img");
for (let i = 0; i < imgs.length; i++) {
  //=====> Birden çok döndüğü için bu şekilde for döngüsü kullanabiliriz.
  imgs[i].style.border = " 2px solid white";
}

// stilleri grubladığımız zaman yukarıdaki şekilde tek tek yazmayız. Peki bunu nasıl yaparız ???
const button = document.querySelector("button");

// tek bir class da toplayıp istedğimiz tag lere class olarak ekle, çıkar gibi şeyler yapabilliriz. Bu classın stillerini de css de hazırlarız.

button.classList; //==>> class ları sıralar.
button.classList.add("siyah"); // ===> class ekler.
button.classList.remove("siyah"); // ===>> class çıkarır.
button.classList.toggle("siyah"); //==>> varsa çıkarır yoksa ekler.
button.classList.contains("siyah"); //===> class içinde varsa true döner yoksa false döner.
