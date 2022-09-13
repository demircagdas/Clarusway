//* =====================================
//*  GUESS MY NUMBER
//*  Game Logic
//*======================================


//? 1-100 arasında rastgele bir sayı tut

const randomNumber = math.floor( math.random() * 100) +1

console.log(randomNumber);




//? Check butonuna basıldığında kontrolleri yap

document.querySelector(".check-btn").addEventListener("click", () => {
    const guessInput =document.querySelector(".guess-input")


})




//! İnput girilmezse kullanıcıya uyarı ver.

//! eğer rastgele == input.value 
//? Tebrikler, bildiniz.
//! Background = Green
//? eğer score > topScore
//?      topScore = score
//?  secret_number = görünür



//! değilse
//! eger score > 0
//! score = score -1
//? Eğer rastgele sayı < input.value
//! Azalt
//?Değilse
//! Arttır
//! değilse
//? üzgünüz, kaybettiniz.




//? Again'e basıldığında 