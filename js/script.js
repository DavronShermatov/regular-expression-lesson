'use script'

//regular expression oddiy iboralar 

const fristName = prompt('what is your name','')

const regex = /a/gi

console.log(fristName.search(regex)) // eng birinchi kelganharfni raqamini aniqlaydi
console.log(fristName.match(regex)) //textdagi barja harflarni massiv ko'rinishida beradi

console.log(fristName.replace(/\a/gi, '*')) //textdagi harflar ornini belgilarga almashtiradi passwordda ishlatishimiz mumkin



//  \d - number           textda number bormo yoqmi aniqlaydi
//  \w - word             textda word borligini aniqlaydi
// \s - space             textda space borligini aniqlaydi

//  \D - not e number           textda number yo'qligini aniqlaydi
//  \W - not e word             textda word yo'qligini aniqlaydi
// \S - not e space             textda space yo'qligini aniqlaydi
 const name = prompt('Name',''),
    regexp = /DAV/gi
 
console.log(name.match(regexp))


console.log(regexp.test(name)) // bu textda berilgan matn bor bo'lsa true yoki false qaytaradi
