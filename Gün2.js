// Dom Event Kavramı
// Events : Kullamıcılarom sayfada yaptığı eylemler
// Tıklamak, kaydırmak , sağ tıklamak, mouse hareketleri , klavye tuşlamaları
//EventHandlers : Bu eylemlerin gerçekleştiğinde yapılması istenenler.
/*
click: sol tık
mousemove: hareket
keyup: klavye tuşa basma
keydown: tuştan kaldırma
change: input değiştirme
submit: form gönderilmesi
*/

// Kullanıcı eylemlerine karşılık olarak sayfada ddinamil değişiklikler yapılır.

// EventListener - addEventlİSTENER

//DOM EVENTİNİ DİNLEYEN, YANİ O EVENT GERÇEKLEŞTİĞİNDE BİR FONKSİYONU TETİKLEYEN ELEMANLARDIR. eventListener kullanmak için ;
// - Eleman, - event türü ve - çalışacak fonksiyon

const buton = document.getElementById("acKapa");
buton.addEventListener("click", toggleTheme); //===>> eventListener
// toggleTheme ===> fonksiyon
// click ====> event type
//buton===>element

//createElement _ appendChild
//createElement ====> yeni bir eleman oluşturmak için kullanılır.
const yeni = document.createElement("p");
yeni.textContent = "teşekkürler";
document.querySelector(".description").appendChild(yeni); ///=====> nereye eklemek istiyorsak onu seçer ve child olarak ekleriz.

yeni.remove(); // ===>>> elemanı silmek için kullanılır.

// Form Elemanları

/*

<form>
<label> 
<textarea>
<button>
</form>

*/
