var renkler=["#cdb5cd","# ffbbff","#cd919e","#cdcdb4","#c1ffc1","#b4cdcd","#add8e6","#cdb7b5","#cdc1c5","#cdc5bf"];
var yaziRengi=document.getElementById("renk");


renk.onclick=function(){

var rasgele=Math.floor(Math.random()*renkler.length);

document.body.style.color=renkler[rasgele];

}


function yazarlar() {
	alert("Yazarların Olduğu Bölüme Hoşgeldiniz!");
}
yazarlar();


function tarih(){
    var t = new Date();
    var gun = t.getDate();
    var ay = t.getMonth() + 1; 
    var yıl = t.getFullYear();
    var gun2=t.getDay();
    
    document.write(gun + "-" + ay + "-" + yıl +" " +gun2 );
}
tarih();


function yonlendir3(){
    setTimeout( "window.location.href ='file:///C:/Users/PC/.vscode/202511062/index4.html'", 30*1000 );
}
yonlendir3();

function uyarı3() {
	alert("30 saniye sonra hakkında bölümüne yönlendirileceksiniz!");
}
uyarı3();