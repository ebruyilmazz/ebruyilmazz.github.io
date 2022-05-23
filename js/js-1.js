var renkler=["#cdb5cd","# ffbbff","#cd919e","#cdcdb4","#c1ffc1","#b4cdcd","#add8e6","#cdb7b5","#cdc1c5","#cdc5bf"];
var sayfaRengi=document.getElementById("renk");


renk.onclick=function(){

var rasgele=Math.floor(Math.random()*renkler.length);

document.body.style.backgroundColor=renkler[rasgele];

}//1


function anasayfa() {
	alert("Anasayfaya Hoşgeldiniz!");
}
anasayfa();//2


function tarih(){
    var t = new Date();
    var gun = t.getDate();
    var ay = t.getMonth() + 1; 
    var yıl = t.getFullYear();
    var gun2=t.getDay();
    
    document.write(gun + "-" + ay + "-" + yıl +" " +gun2 );
}
tarih();//3


function yonlendir1(){
    setTimeout( "window.location.href ='file:///C:/Users/PC/.vscode/202511062/index2.html'", 30*1000 );
}
yonlendir1();//4


function uyarı1() {
	alert("30 saniye sonra kitapların olduğu bölüme yönlendirileceksiniz!");
}
uyarı1();


