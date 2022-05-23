var renkler=["#cdb5cd","# ffbbff","#cd919e","#cdcdb4","#c1ffc1","#b4cdcd","#add8e6","#cdb7b5","#cdc1c5","#cdc5bf"];
var sayfaRengi=document.getElementById("renk");


renk.onclick=function(){

var rasgele=Math.floor(Math.random()*renkler.length);

document.body.style.backgroundColor=renkler[rasgele];

}

function kitaplar() {
	alert("Kitapların Olduğu Yere Hoşgeldiniz!");
}
kitaplar();

AlıntıYaz= function () {
    var alıntı = new Array();
    alıntı[0] = "Ölüm çoktan ayrı yerlere koydu bizi! (İki Şehrin Hikâyesi, Charles Dickens)";
    alıntı[1] = "İnsanlar başkalarını yargılarken bunu hep kendi sınırlamaları üzerinden yaparlar- üstelik üçüncü kişilerin görüşleri sıklıkla ön yargılar ve korkularla doludur.(Okçu'nun Yolu, Paulo Coelho)";
    alıntı[2] = "Yaşamak elindeyken bugüne bugün, Ne diye bırakır, yarını düşünürsün? (Dörtlükler,Ömer Hayyam)";
    alıntı[3] = "İnsan yalnızca başkalarına zarar verecek şeylerden korkmalı; bunun dışında korkuya yer olmamalı. (İlahi Komedya, Dante Alighieri)";
    alıntı[4]="Görmüyor mu peki bunu bizimkiler, yoksa görmek mi istemiyorlar? Üstüne üstlük bir de hoşnutlar bu durumdan, hoşnut! (Suç ve Ceza,Fyodor Dostoyevski)";
    alıntı[5]="Ama ne kadar fazlasına sahipsen senden alabilecekleri şey o kadar fazla oluyor. (Son Kelime, Patricia Forde)";
    alıntı[6]="İnsanların sık sık «Gözümle görsem inanmam!» dediklerine dikkat etmişsinizdir. Bu ne demektir? İnsan gözüyle gördüğüne de inanmayacaksa görmenin mânâsı kalır mı? (Ruh Adam,Hüseyin Nihal Atsız)";
    alıntı[7]="Dünyada , ulusun bağrında özgür bir birey olmak kadar büyük bir mutluluk var mıdır? Gerçekleri bilen, kalp ve vicdanında manevi ve kutsal zevklerden başka zevk taşımayan insanlar için, ne kadar yüksek olursa olsun, maddi makamların hiçbir değeri yoktur. (Nutuk,Mustafa Kemal ATATÜRK)";
    alıntı[8]="Onu yüreğimde öldüreceğim, artık sevmeyerek...Ve bir gün büsbütün ölecek. (Şeker Portakalı, José Mauro de Vasconcelos)";
    alıntı[9]="Bu yaşantının da sonu kötü bitecek albayım.(Tehlikeli Oyunlar, Oğuz Atay)";
    alıntı[10]="Yalnızlık, insanı ve evi sessizleştiriyor. Hayatı da. Dışarıdan gelen hiçbir gürültünün şiddeti, yalnızlığın uçsuz bucaksız sessizliğini bozmaya yetmiyor. (Şanzelize Düğün Salonu, Tarık Tufan)";
    var rand = Math.floor(Math.random()*alıntı.length);
    document.write(alıntı[rand]);
  }
  AlıntıYaz();

  function tarih(){
    var t = new Date();
    var gun = t.getDate();
    var ay = t.getMonth() + 1; 
    var yıl = t.getFullYear();
    var gun2=t.getDay();
    
    document.write(gun + "-" + ay + "-" + yıl +" " +gun2 );
}
tarih();

function yonlendir2(){
    setTimeout( "window.location.href ='file:///C:/Users/PC/.vscode/202511062/index3.html'", 30*1000 );
}
yonlendir2();

function uyarı2() {
	alert("30 saniye sonra yazarların olduğu bölüme yönlendirileceksiniz!");
}
uyarı2();



var kategoriler=new Array();
kategoriler[0]="Korku";
kategoriler[1]="Edebiyat";
kategoriler[2]="Bilim";
kategoriler[2]="Felsefe";
kategoriler[3]="Kişisel Gelişim";

function kategori(){
    document.write(kategoriler[0]);
    document.write("<br>"+"1-Stephen King – Hayvan Mezarlığı" + "<br>" +" 2-Howard Phillips Lovecraft – Deliliğin Dağlarında" +" <br>"+ "3-Josh Malerman – Kafes" + "<br>" + "4-Stephen King – Mahşer" + "<br>" +"5-Mary Shelley – Frankenstein"+" <br>" +" 6-Adam Nevill – Daire 16"+ "<br>"+ "William Peter Blatty – Şeytan" + "<br>"+"<br>")
    document.write(kategoriler[1]);
    document.write("<br>"+"1-Şeker Portakalı ,Jose Mauro De Vasconcelos" + "<br>" +" 2-Saatleri Ayarlama Enstitüsü,Ahmet Hamdi Tanpınar" +" <br>"+ "3-İnce Memed 1, (1955) Yaşar Kemal" + "<br>" + "4-Anayurt Oteli, (1973) Yusuf Atılgan" + "<br>" +"5-Araba Sevdası, (1898) Recâizâde Mahmut Ekrem"+" <br>" +" 6-Benim Adım Kırmızı, (1998) Orhan Pamuk"+ "<br>"+"<br>")
    document.write(kategoriler[2]);
    document.write("<br>"+"1-Büyük Sorulara Kısa Yanıtlar,Stephen Hawking" + "<br>" +" 2-Zamanın Kısa Tarihi, Stephen Hawking" +" <br>"+ "3-Bilimin Büyüsü ,A. M. Celal Şengör" + "<br>" + "4-Aforizmalar, Stephen Hawking" + "<br>"+"<br>")
    document.write(kategoriler[3]);
    document.write("<br>"+"1-İnsan Geleceğini Nasıl Kurar?, İlber Ortaylı" + "<br>" +" 2-Bir Ömür Nasıl Yaşanır?, İlber Ortaylı" +" <br>"+ "3-Var mısın? - Güçlü Bir Yaşam İçin Öneriler, Doğan Cüceloğlu" + "<br>"+"<br>") 
}




