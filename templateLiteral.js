// const val1 = 10
// const val2 = 'world'

// console.log(val1 + val2);





/*
nilai ipa saya 80
nilai ips saya 70
rata-rata dari nilai saya 75
*/

const nilaiIpa = 80
const nilaiIps = 70

// concatenated

const text = 'nilai ipa saya '+nilaiIpa + '\n' + 'nilai ips saya '+nilaiIps+ '\n' + 'rata-rata dari nilai saya '+ ((nilaiIpa + nilaiIps) /2)

console.log(text);

// template literal

const text2 = `nilai ipa saya ${nilaiIpa}
nilai ips saya ${nilaiIps}
rata-rata dari nilai saya ${(nilaiIpa + nilaiIps) /2}`

console.log(text2);