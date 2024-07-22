/*   Sprint 5 Ders Notları */
/* React Başladı */
/* 
React bir frameworktür.
Temel faydalarını öğrenecez.
İlk ders Dom Manipülasyonları ile başlayacaz.
*/

/* 
HTML Statik veri göstermek için bir sunum dilidir. Kendiliğinden DEĞİŞMEZ.
Documentt Object Model (DOM) Browser HTML dosyasını okuyuğ bir JS  objesi oluşturur.
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
