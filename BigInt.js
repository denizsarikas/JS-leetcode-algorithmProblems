/*
Ondalık Sayıyı BigInt'e Dönüştürme:

const decimalNumber = 12345;
const bigIntNumber = BigInt(decimalNumber);
console.log(bigIntNumber);


İkili (Binary) Dizeyi BigInt'e Dönüştürme:

const binaryString = "1010";
const bigIntFromBinary = BigInt("0b" + binaryString);
console.log(bigIntFromBinary);


BigInt Toplama ve Çıkarma:

const num1 = BigInt(10);
const num2 = BigInt(20);
const sum = num1 + num2;
const difference = num2 - num1;
console.log("Toplam:", sum);
console.log("Fark:", difference);


BigInt Ekleme ve Çıkarma (Değişken Üzerinde İşlem Yapma):

let total = BigInt(100);
const addToTotal = BigInt(50);
const subtractFromTotal = BigInt(25);
total += addToTotal;
total -= subtractFromTotal;
console.log("Toplam:", total);


BigInt Karşılaştırma:

const a = BigInt(100);
const b = BigInt(200);
const isEqual = a === b;
const isGreaterThan = a > b;
console.log("Eşit mi?", isEqual);
console.log("Büyük mü?", isGreaterThan);


BigInt'i Dizeye Dönüştürme:

const bigIntNumber = BigInt(12345);
const stringFromBigInt = bigIntNumber.toString();
console.log(stringFromBigInt);


Daha Büyük Sayılarla İşlem:

BigInt, çok büyük sayıları işlemek için kullanılır ve taşma sorunlarına karşı dayanıklıdır.

const veryLargeNumber = BigInt("1234567890123456789012345678901234567890");
const result = veryLargeNumber * BigInt(2);
console.log(result);
Bu örnekler, BigInt veri türünün kullanımına ilişkin farklı senaryoları kapsamaktadır. BigInt sayılarının kullanımı, çok büyük veya hassas sayılarla işlem yapmanız gerektiğinde özellikle yararlıdır.

*/