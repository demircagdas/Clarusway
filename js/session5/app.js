console.log('bom');

for(let i = 1 ; i <= 10; i++){
    console.log("Merhaba");
}




//  1'den başlayarak n'e kadar hepsini topla

// let toplam = 0
// const n = +prompt("Bir sayı giriniz:")
// for(i=1 ; i <= n ; i++){
// //    toplam = toplam + i;  alttakiyle aynı syntax
//    toplam += i
//     console.log('sonuç:', toplam);
// }




// 0-100 arasında 10 tane random sayı üreten bir kod yaz

// for (let i = 1; i <= 10; i++) {
//     const rastgele = Math.floor(Math.random() *100)
//     console.log(rastgele);
// }





// Girilen sayının asal olup olmadığını for döngüsü ile yazınız


// const sayi = +prompt("Pozitif bir sayı giriniz:")
// let asal = true;

// if(sayi <= 0){
//     alert
//     ("Sayı 0'dan büyük olmalıdır.")
// }else{
//     for(let i=2 ; i<sayi ; i++){
//         if(sayi % i === 0){
//             asal = false;
//             break;
//         }
//     }
//     const sonuc = asal === true ? "Asaldır" :"Asal Değildir"
//     console.log(`${sayi} ${sonuc}`);
// }





// * ============================================
// *            DONGULER(LOOPS)- WHILE
// * ============================================

console.log("****** WHILE *******");

//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.


// let not = +prompt("Lütfen 0-100 arasında bir not giriniz.")

// while (not < 0 || not > 100){
//     console.log("Not *-100 arasında olmalıdır.");
//     not = +prompt("Lütfen 0-100 arasında bir not giriniz.")
// }
// console.log("Girdiğiniz not:", not);





console.log("****** DO WHILE *******");