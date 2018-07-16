// Diberikan sebuah function pasanganTerbesar(angka) yang menerima 1 parameter berupa angka. 
// Functiona akan menentukan pasangan dua digit angka mana yang paling besar dan me-return angka tersebut. 
// Contoh, jika angka adalah 183928, maka function akan me-return 92, 
// pasangan dua digit angka yang paling besar diantara yang lainnya.

function pasanganTerbesar(num) {
    // you can only write your code here!
  
  var pasangan = []; 
  var str = num.toString();
  
  for (var i=0; i<str.length; i++){
      var tampung = '';

      if (str[i+1] === undefined) {
        break;
      }
      tampung = str[i] + str[i+1];
      pasangan.push(tampung)
    }

      pasangan.sort(function(a,b){return b-a});
      var hasil = parseInt(pasangan[0])
  
      return hasil
  
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
  