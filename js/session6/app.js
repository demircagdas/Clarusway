function yazdir () {
    console.log('Merhaba');
}

yazdir();
yazdir();





function selamla(ad, soyad) {
    console.log(`Merhaba ${ad} ${soyad}`);
}


selamla("Çağdaş", "Demir")




function yashesapla (isim, dogumtarihi) {
    const sonuc = `${isim}, ${2022 - dogumtarihi} yaşındadır`
    return sonuc
}

const cagdasyas = yashesapla("Çağdaş", "1992")
console.log(cagdasyas);





function tekcift(sayi) {
    return sayi % 2 ? "Tektir" : "Çifttir"
}

console.log(tekcift(5));
console.log(tekcift(4));







