// Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. 
// Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n. 
// Contoh input dapat dilihat dibawah:

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

var inputLength= input.length;
var hasil = 0;

function dataHandling(input){
while(hasil<inputLength){
console.log('Nomor ID: '+input[hasil][0]);
console.log('Nama Lengkap: '+input[hasil][1]);
console.log('TTL: '+input[hasil][2]);
console.log('Hobi: '+input[hasil][3]);
console.log();
hasil++;
}
}
dataHandling(input);