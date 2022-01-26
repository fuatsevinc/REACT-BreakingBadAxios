// Conditionals

// let score = 48

// let score = +prompt('Notunuzu girin : ')

// let grade = score >= 50

// console.log(grade);

// if (grade) console.log(`Tebrikler, notunuz ${score} geçtiniz`);

// console.log('kod sonu');


// if (grade) {
//     console.log(`Tebrikler, notunuz ${score} geçtiniz`);
        
// } else {
//     console.log('Üzgünüm kaldınız');
    
// }

// let score = 75

// if (score > 80) {
//     console.log('Tebrikler çok başarılı öğrencisiniz');
    
// } else if (score >= 50) {
//     console.log(`Tebrikler, notunuz ${score} geçtiniz`);
    
// }else{
//     console.log('Üzgünüm kaldınız');
// }

// let score = 49

// if (score >= 50) {
    
//     if (score > 80) {
//         console.log('Tebrikler çok başarılı öğrencisiniz');
//     }else{

//         console.log('Tebrikler geçtiniz');
//     }
    
// }else{
//     console.log('Üzgünüm kaldınız');
// }


//Ternary if

// var score = 46;

// // score >= 50 ? console.log('Tebrikler geçtiniz') : console.log('Üzgünüm kaldınız');

// score >= 80 ?  console.log('Tebrikler çok başarılı öğrencisiniz') :
//  (score >= 50 ? console.log('Tebrikler geçtiniz') : console.log('Üzgünüm kaldınız'))

//switch yapısı

var text;
// var fruits = 'Lemon';

var fruits = prompt('Enter your favorite fruit :')
// console.log(fruits.toLowerCase());

//toLoWercase()

switch (fruits.toLowerCase()) {
    case "banana":
        text = "Banana is good"
    break;
    case "lime":
    case "lemon":
    case "orange":
        text = `I am not a fan of ${fruits.toLowerCase()}.`;
    break;

    case "apple":
        text = "How you like them apples?";
    break;

    default:
        text = "I have never heard of that fruit...";
        break;
}

console.log(text);


// pazartesi çarşamba perşembe cumartesi in class
// salı cuma team work
// pazar tatil
// default yanlış gün girildi.

var day = prompt("gün giriniz:");

switch (day.toLowerCase()){
    case "Pazartesi":
    case "Cumartesi":
    case "Çarşamba" :
    case "perşembe" :
        console.log("inclass");
      break;
    case "Salı":
        console.log("workshop");
      break;
    case "cuma":
        console.log("teamwork");   
      break;
    default:
        console.log("tatil");
      break;
}